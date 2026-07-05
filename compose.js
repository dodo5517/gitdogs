// compose.js — 모션 부품들을 마스터 타임라인 위에 배치해 하나의 장면 SVG로 합성한다.
// 부품(parts/*.frag)은 원점 정렬, 지면 y=116으로 정규화되어 있다.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PARTS = path.join(__dirname, "parts");
const META = JSON.parse(fs.readFileSync(path.join(PARTS, "meta.json"), "utf8"));
const frag = (n) => fs.readFileSync(path.join(PARTS, `${n}.frag`), "utf8");
const r = (x) => Number(x.toFixed(4));

// 세그먼트: { motion, dur(초), from:{x,y}, to:{x,y}, face? }
// from == to 이면 제자리 모션. 방향은 기본적으로 이동 방향을 따른다.
const seg = (motion, dur, from, to = from, face) => ({ motion, dur, from, to, face });
const p = (x, y = 0) => ({ x, y });

// 마스터 시계(total초) 위에서 [k0,k1) 구간에만 보이는 opacity 애니메이션 생성
function opacityWindow(k0, k1, total) {
  if (k0 === 0 && k1 === 1) return { attr: "", anim: "" };
  const A = (v, k) =>
    `<animate attributeName="opacity" values="${v}" keyTimes="${k}" dur="${total}s" calcMode="discrete" repeatCount="indefinite"/>`;
  if (k0 === 0) return { attr: "", anim: A("1;0", `0;${r(k1)}`) };
  if (k1 === 1) return { attr: ' opacity="0"', anim: A("0;1", `0;${r(k0)}`) };
  return { attr: ' opacity="0"', anim: A("0;1;0", `0;${r(k0)};${r(k1)}`) };
}

// 구간 [k0,k1] 동안 from에서 to로 선형 이동. 구간 밖에서는 양 끝점에 정지.
function movement(from, to, k0, k1, total) {
  if (from.x === to.x && from.y === to.y)
    return { open: `<g transform="translate(${from.x},${from.y})">`, anim: "" };
  const pts = [[0, from]];
  if (k0 > 0) pts.push([k0, from]);
  pts.push([k1, to]);
  if (k1 < 1) pts.push([1, to]);
  return {
    open: "<g>",
    anim: `<animateTransform attributeName="transform" type="translate" values="${pts
      .map(([, q]) => `${q.x} ${q.y}`)
      .join("; ")}" keyTimes="${pts.map(([k]) => r(k)).join("; ")}" dur="${total}s" repeatCount="indefinite"/>`,
  };
}

function composeScene(segments) {
  const total = segments.reduce((s, x) => s + x.dur, 0);

  // 검증: 화면 이탈 및 루프 닫힘 (마지막 위치 == 시작 위치)
  for (const s of segments) {
    const w = META[s.motion].width;
    for (const q of [s.from, s.to])
      if (q.x < 0 || q.x + w > 880)
        console.warn(`[compose] 화면 이탈: ${s.motion} x=${q.x} (w=${w})`);
  }
  const first = segments[0], last = segments[segments.length - 1];
  if (first.from.x !== last.to.x || first.from.y !== last.to.y)
    console.warn(`[compose] 루프 미닫힘: 시작 (${first.from.x},${first.from.y}) / 끝 (${last.to.x},${last.to.y})`);

  const used = [...new Set(segments.map((s) => s.motion))];
  const defs = used.map((n) => `<g id="part_${n}">\n${frag(n)}\n</g>`).join("\n");

  let t = 0;
  let facing = "right"; // 방향 연속성: 제자리 모션은 직전 이동 방향을 상속
  const body = segments
    .map((s) => {
      const k0 = r(t / total);
      let k1 = r((t + s.dur) / total);
      if (k1 >= 0.9999) k1 = 1;
      t += s.dur;
      const w = META[s.motion].width;
      const moving = s.from.x !== s.to.x || s.from.y !== s.to.y;
      const face = s.face ?? (moving ? (s.to.x < s.from.x ? "left" : "right") : facing);
      facing = face;
      // 왼쪽을 볼 때는 부품 폭 기준으로 좌우 반전
      const flip = face === "left" ? ` transform="translate(${w},0) scale(-1,1)"` : "";
      const vis = opacityWindow(k0, k1, total);
      const mov = movement(s.from, s.to, k0, k1, total);
      return [`<g${vis.attr}>`, vis.anim, mov.open, mov.anim,
              `<g${flip}><use href="#part_${s.motion}"/></g>`, `</g>`, `</g>`].join("\n");
    })
    .join("\n\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 120" width="880" height="120">
<defs>
${defs}
</defs>
${body}
</svg>`;
}

// ---------------------------------------------------------------------------
// 상태별 장면 템플릿 (닫힌 루프, 항상 화면 안, 에너지 티어별 변형)
// 좌표: x는 부품 왼쪽 끝, y는 지면 기준 상승량(음수 = 위로)
// ---------------------------------------------------------------------------

const SCENES = {
  // zoomies: 오늘 커밋 10개 이상 — 플레이 바우로 몸을 낮췄다 질주
  zoomiesA: () => [
    seg("playbow", 6, p(20, -8)),
    seg("run", 4, p(20, -8), p(660, -8)),
    seg("bounce", 6, p(660, -8)),
    seg("run", 5, p(660, -8), p(40, -20)),
    seg("dig", 8, p(40, -20)),
    seg("run", 4, p(40, -20), p(400, 0)),
    seg("playbow", 5, p(400, 0)),
    seg("run", 4, p(400, 0), p(20, -8)),
  ],
  zoomiesB: () => [
    seg("bounce", 5, p(340, 0)),
    seg("run", 4, p(340, 0), p(660, -12)),
    seg("shake", 5, p(660, -12)),
    seg("run", 6, p(660, -12), p(60, -4)),
    seg("playbow", 6, p(60, -4)),
    seg("run", 5, p(60, -4), p(340, 0)),
  ],

  // active: 오늘 4~9
  activeA: () => [
    seg("walk", 11, p(60, 0), p(480, -14)),
    seg("dig", 10, p(480, -14)),
    seg("shake", 5, p(480, -14)),
    seg("playbow", 5, p(480, -14)),
    seg("run", 6, p(480, -14), p(120, -6)),
    seg("sniff", 6, p(120, -6), p(60, 0)),
  ],
  activeB: () => [
    seg("sniff", 12, p(40, -6), p(360, -18)),
    seg("bounce", 6, p(360, -18)),
    seg("walk", 9, p(360, -18), p(640, -6)),
    seg("dig", 10, p(640, -6)),
    seg("run", 6, p(640, -6), p(40, -6)),
  ],

  // normal: 오늘 1~3
  normalA: () => [
    seg("walk", 12, p(80, 0), p(520, -16)),
    seg("sniff", 7, p(520, -16), p(640, -8)),
    seg("dig", 12, p(640, -8)),
    seg("walk", 10, p(640, -8), p(300, -20)),
    seg("lick", 10, p(300, -20)),
    seg("walk", 8, p(300, -20), p(80, 0)),
  ],
  normalB: () => [
    seg("sniff", 13, p(100, -4), p(420, -16)),
    seg("dig", 12, p(420, -16)),
    seg("shake", 5, p(420, -16)),
    seg("walk", 9, p(420, -16), p(680, -4)),
    seg("lick", 10, p(680, -4)),
    seg("walk", 13, p(680, -4), p(100, -4)),
  ],
  normalC: () => [
    seg("walk", 11, p(200, -8), p(560, -20)),
    seg("lick", 9, p(560, -20)),
    seg("sniff", 12, p(560, -20), p(260, -8)),
    seg("dig", 12, p(260, -8)),
    seg("walk", 5, p(260, -8), p(200, -8)),
  ],

  // calm: 오늘 0, 주간 커밋은 있음
  calmA: () => [
    seg("stretch", 8, p(300, 0)),
    seg("walk", 12, p(300, 0), p(560, -12)),
    seg("doze", 18, p(560, -12)),
    seg("stretch", 8, p(560, -12)),
    seg("walk", 12, p(560, -12), p(300, 0)),
  ],
  calmB: () => [
    seg("walk", 10, p(240, 0), p(420, -10)),
    seg("beg", 16, p(420, -10)),
    seg("doze", 16, p(420, -10)),
    seg("stretch", 7, p(420, -10)),
    seg("walk", 9, p(420, -10), p(240, 0)),
  ],
  calmC: () => [
    seg("doze", 20, p(340, 0)),
    seg("shake", 5, p(340, 0)),
    seg("sniff", 10, p(340, 0), p(520, -10)),
    seg("rest", 16, p(520, -10)),
    seg("walk", 9, p(520, -10), p(340, 0)),
  ],

  // sleepy: 일주일 내내 커밋 없음 — 잠만 잔다
  sleepyA: () => [seg("sleep", 60, p(340, 0))],

  // greet: push 직후 — 짧고 격한 환영
  greetA: () => [
    seg("run", 5, p(80, 0), p(360, -10)),
    seg("bark", 8, p(360, -10)),
    seg("playbow", 7, p(360, -10)),
    seg("bounce", 5, p(360, -10)),
    seg("run", 4, p(360, -10), p(80, 0)),
  ],

  // celebrate: 스트릭 달성일 — 축제
  celebrateA: () => [
    seg("run", 5, p(60, 0), p(340, -10)),
    seg("bark", 14, p(340, -10)),
    seg("bounce", 6, p(340, -10)),
    seg("run", 4, p(340, -10), p(620, -16)),
    seg("playbow", 8, p(620, -16)),
    seg("run", 6, p(620, -16), p(60, 0)),
  ],
};

const VARIANTS = {
  zoomies: ["zoomiesA", "zoomiesB"],
  active: ["activeA", "activeB"],
  normal: ["normalA", "normalB", "normalC"],
  calm: ["calmA", "calmB", "calmC"],
  sleepy: ["sleepyA"],
  greet: ["greetA"],
  celebrate: ["celebrateA"],
};

// 같은 상태라도 seed(사용자+날짜+시간)에 따라 변형을 결정적으로 선택
function sceneFor(state, seed = "") {
  const pool = VARIANTS[state] ?? VARIANTS.normal;
  const h = crypto.createHash("sha256").update(seed).digest();
  return SCENES[pool[h[0] % pool.length]]();
}

module.exports = { composeScene, sceneFor, VARIANTS, SCENES };
