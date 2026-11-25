// sample.js — README에 싣는 견종별 샘플 장면을 samples/<견종>.svg 로 만든다.
// 사용법: node sample.js
// 견종 전용 슬롯(play·react)이 모두 나오는 playfulA 장면을 쓴다. 부품을 고친 뒤 다시 실행하면 된다.
const fs = require('fs');
const path = require('path');
const { composeScene, SCENES } = require('./compose.js');

const out = path.join(__dirname, 'samples');
fs.mkdirSync(out, { recursive: true });
const breeds = fs
  .readdirSync(path.join(__dirname, 'parts'), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
for (const breed of breeds) {
  fs.writeFileSync(path.join(out, `${breed}.svg`), composeScene(SCENES.playfulA(), breed));
  console.log(`samples/${breed}.svg`);
}
