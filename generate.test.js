// 실행: node --test generate.test.js
const test = require("node:test");
const assert = require("node:assert");
const { decideState, computeStats } = require("./generate.js");

const S = (today, yesterday, week, streak) => ({ today, yesterday, week, streak, total: 500 });

test("push event: greet", () => {
  assert.equal(decideState(S(0, 0, 0, 0), "u", "push"), "greet");
});
test("nothing all week: sleepy", () => {
  assert.equal(decideState(S(0, 0, 0, 0), "u"), "sleepy");
});
test("streak milestone: celebrate", () => {
  assert.equal(decideState(S(2, 1, 20, 30), "u"), "celebrate");
});
test("10+ today: zoomies", () => {
  assert.equal(decideState(S(12, 1, 20, 3), "u"), "zoomies");
});
test("4-9 today: active", () => {
  assert.equal(decideState(S(5, 1, 12, 3), "u"), "active");
});
test("1-3 today: normal", () => {
  assert.equal(decideState(S(2, 1, 8, 3), "u"), "normal");
});
test("0 today but active week: calm", () => {
  assert.equal(decideState(S(0, 3, 9, 0), "u"), "calm");
});
test("tier boundaries: 3 vs 4, 9 vs 10", () => {
  assert.equal(decideState(S(3, 0, 5, 1), "u"), "normal");
  assert.equal(decideState(S(4, 0, 5, 1), "u"), "active");
  assert.equal(decideState(S(9, 0, 15, 1), "u"), "active");
  assert.equal(decideState(S(10, 0, 15, 1), "u"), "zoomies");
});
test("computeStats: streak survives a commit-less morning", () => {
  const days = [
    { date: "2026-07-01", count: 2 },
    { date: "2026-07-02", count: 1 },
    { date: "2026-07-03", count: 4 },
    { date: "2026-07-04", count: 0 },
  ];
  const s = computeStats(days, "2026-07-04");
  assert.equal(s.streak, 3);
  assert.equal(s.week, 7);
});
