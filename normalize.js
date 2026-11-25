// normalize.js — assets/<견종>/*.svg 를 합성용 부품 parts/<견종>/*.frag + meta.json 으로 변환한다.
// 사용법: node normalize.js <견종>
//
// - 화면을 가로지르는 이동 애니메이션(translate 범위가 큰 animateTransform)을 제거한다.
// - 그림자를 포함한 경계 상자의 왼쪽 끝을 x=0에, 발바닥(가장 낮은 rect 하단)을 지면 y=116에 맞춘다.
// - id와 그 참조에 <견종>_<모션>_ 접두사를 붙여 장면 안에서 충돌하지 않게 한다.
// rect, ellipse, translate(그룹)만 경계 계산에 반영한다 (rotate 등은 무시).
const fs = require('fs');
const path = require('path');

const GROUND = 116;

function stripTraversal(src) {
  return src.replace(/<animateTransform\b[^>]*?\/>/gs, (tag) => {
    if (!/type="translate"/.test(tag)) return tag;
    const m = tag.match(/values="([^"]*)"/);
    if (!m) return tag;
    const xs = m[1]
      .split(';')
      .map((v) => Number(v.trim().split(/[\s,]+/)[0]))
      .filter((n) => !Number.isNaN(n));
    return Math.max(...xs) - Math.min(...xs) > 300 ? '' : tag;
  });
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? Number(m[1]) : 0;
}

function bbox(src) {
  const body = src.replace(/<!--[\s\S]*?-->/g, '');
  const stack = [[0, 0]];
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity,
    ground = -Infinity;
  const add = (x0, y0, x1, y1) => {
    minX = Math.min(minX, x0);
    minY = Math.min(minY, y0);
    maxX = Math.max(maxX, x1);
    maxY = Math.max(maxY, y1);
  };
  for (const [tag] of body.matchAll(/<\/?[a-zA-Z][^>]*>/g)) {
    const [ox, oy] = stack[stack.length - 1];
    if (tag.startsWith('</g')) {
      stack.pop();
      continue;
    }
    if (/^<g[\s>]/.test(tag)) {
      const t = tag.match(/transform="translate\(\s*([-\d.]+)[\s,]+([-\d.]+)\s*\)"/);
      const d = t ? [Number(t[1]), Number(t[2])] : [0, 0];
      const next = [ox + d[0], oy + d[1]];
      if (tag.endsWith('/>')) continue;
      stack.push(next);
      continue;
    }
    if (tag.startsWith('<rect')) {
      const x = ox + attr(tag, 'x'),
        y = oy + attr(tag, 'y');
      const w = attr(tag, 'width'),
        h = attr(tag, 'height');
      add(x, y, x + w, y + h);
      ground = Math.max(ground, y + h);
    } else if (tag.startsWith('<ellipse')) {
      const cx = ox + attr(tag, 'cx'),
        cy = oy + attr(tag, 'cy');
      const rx = attr(tag, 'rx'),
        ry = attr(tag, 'ry');
      add(cx - rx, cy - ry, cx + rx, cy + ry);
    }
  }
  return { minX, minY, maxX, maxY, ground };
}

function normalize(breed) {
  const srcDir = path.join(__dirname, 'assets', breed);
  const outDir = path.join(__dirname, 'parts', breed);
  fs.mkdirSync(outDir, { recursive: true });
  const meta = {};
  for (const file of fs.readdirSync(srcDir).filter((f) => f.endsWith('.svg')).sort()) {
    const motion = path.basename(file, '.svg');
    let src = fs.readFileSync(path.join(srcDir, file), 'utf8');
    src = src.replace(/^[\s\S]*?<svg\b[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    src = stripTraversal(src);
    const prefix = `${breed}_${motion}_`;
    src = src
      .replace(/\bid="([^"]+)"/g, `id="${prefix}$1"`)
      .replace(/href="#([^"]+)"/g, `href="#${prefix}$1"`)
      .replace(/url\(#([^)]+)\)/g, `url(#${prefix}$1)`);
    const b = bbox(src);
    const dx = -b.minX,
      dy = GROUND - b.ground;
    fs.writeFileSync(
      path.join(outDir, `${motion}.frag`),
      `<g transform="translate(${dx},${dy})">\n${src}\n</g>\n`,
    );
    meta[motion] = { width: b.maxX - b.minX, height: b.maxY - b.minY };
  }
  fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify(meta, null, 2));
  return meta;
}

if (require.main === module) {
  const breed = process.argv[2];
  if (!breed) {
    console.error('사용법: node normalize.js <견종>');
    process.exit(1);
  }
  console.log(normalize(breed));
}

module.exports = { normalize, bbox, stripTraversal };
