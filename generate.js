// gitdogs 생성기
// 사용법: GITHUB_TOKEN=... GITHUB_USERNAME=... node generate.js [--event push] [--mock "today=3,week=9"]
// Node 18 이상 필요 (내장 fetch 사용)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// ---------------------------------------------------------------------------
// 1. 상태 결정 (순수 함수, 단위 테스트 대상)
// ---------------------------------------------------------------------------

const STREAK_MILESTONES = [7, 30, 100, 365];

/**
 * 커밋량이 많을수록 활동적인 장면이 나온다.
 * @param {object} stats  { today, yesterday, week, streak, total }
 * @param {string} seed   결정적 시드 (현재 미사용, 장면 변형 선택은 sceneFor가 담당)
 * @param {string|null} event  push 트리거면 "push"
 * @returns {string} zoomies | active | normal | calm | sleepy | celebrate | greet
 */
function decideState(stats, seed, event = null) {
  const { today, week, streak } = stats;

  if (event === "push") return "greet";        // 방금 푸시: 달려와서 반김
  if (week === 0) return "sleepy";              // 일주일 내내 0: 동면
  if (STREAK_MILESTONES.includes(streak)) return "celebrate"; // 스트릭 기념일
  if (today >= 10) return "zoomies";
  if (today >= 4) return "active";
  if (today >= 1) return "normal";
  return "calm";                                // 오늘 0, 주간 커밋은 있음
}

// ---------------------------------------------------------------------------
// 2. GitHub GraphQL 잔디 데이터에서 통계 계산
// ---------------------------------------------------------------------------

/** days: [{date:"YYYY-MM-DD", count:n}, ...] 오름차순 */
function computeStats(days, todayISO) {
  const byDate = new Map(days.map((d) => [d.date, d.count]));
  const t = new Date(todayISO + "T00:00:00Z");
  const iso = (d) => d.toISOString().slice(0, 10);
  const daysAgo = (n) => iso(new Date(t.getTime() - n * 86400000));

  const today = byDate.get(todayISO) ?? 0;
  const yesterday = byDate.get(daysAgo(1)) ?? 0;

  let week = 0;
  for (let i = 0; i < 7; i++) week += byDate.get(daysAgo(i)) ?? 0;

  // 스트릭: 오늘 아직 커밋이 없어도 어제까지 이어졌으면 유지 (하루 중간에 끊지 않음)
  let streak = 0;
  for (let i = today > 0 ? 0 : 1; ; i++) {
    if ((byDate.get(daysAgo(i)) ?? 0) > 0) streak++;
    else break;
  }

  const total = days.reduce((s, d) => s + d.count, 0);
  return { today, yesterday, week, streak, total };
}

async function fetchCalendar(username, token) {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })));
}

// ---------------------------------------------------------------------------
// 3. 통계 배지 SVG (강아지 아래에 표시)
// ---------------------------------------------------------------------------

function makeStatsSvg(stats, state, todayISO) {
  const text = [
    `state ${state}`,
    `today ${stats.today}`,
    `streak ${stats.streak}d`,
    `week ${stats.week}`,
    `total ${stats.total}`,
    todayISO,
  ].join("  \u00B7  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 32" width="880" height="32">
  <rect x="2" y="9" width="12" height="12" fill="#A0672F"/>
  <rect x="5" y="6" width="6" height="3" fill="#6B4423"/>
  <text x="24" y="21" font-family="ui-monospace, monospace" font-size="15" fill="#8b949e">${text}</text>
</svg>`;
}

// ---------------------------------------------------------------------------
// 4. 메인: 상태 결정 -> 장면 합성 -> dist/ 출력
// ---------------------------------------------------------------------------

// --mock "today=5,week=12" : API 호출 없이 임의 수치로 테스트
function parseMock(argv) {
  const i = argv.indexOf("--mock");
  if (i === -1) return null;
  const stats = { today: 0, yesterday: 0, week: 0, streak: 0, total: 0 };
  for (const pair of (argv[i + 1] ?? "").split(",")) {
    const [k, v] = pair.split("=");
    if (k in stats) stats[k] = Number(v);
  }
  return stats;
}

async function main() {
  const event = process.argv.includes("--event")
    ? process.argv[process.argv.indexOf("--event") + 1]
    : null;
  const mock = parseMock(process.argv);

  // 잔디 데이터는 UTC 기준이므로 시차 보정 (KST = 9)
  const tzOffset = Number(process.env.TZ_OFFSET_HOURS ?? 0);
  const now = new Date(Date.now() + tzOffset * 3600000);
  const todayISO = now.toISOString().slice(0, 10);

  const username = process.env.GITHUB_USERNAME ?? "mock-user";
  let stats;
  if (mock) {
    stats = mock;
  } else {
    const token = process.env.GITHUB_TOKEN;
    if (!process.env.GITHUB_USERNAME || !token) {
      console.error("GITHUB_USERNAME과 GITHUB_TOKEN을 설정하세요 (또는 --mock 사용)");
      process.exit(1);
    }
    stats = computeStats(await fetchCalendar(username, token), todayISO);
  }

  const state = decideState(stats, `${username}:${todayISO}`, event);

  const { composeScene, sceneFor } = require("./compose.js");
  const dist = path.join(__dirname, "dist");
  fs.mkdirSync(dist, { recursive: true });
  // 시드에 시간을 넣어 실행 시각마다 장면 변형이 바뀌게 한다
  const scene = sceneFor(state, `${username}:${todayISO}:${now.getUTCHours()}`);
  fs.writeFileSync(path.join(dist, "dog.svg"), composeScene(scene));
  fs.writeFileSync(path.join(dist, "stats.svg"), makeStatsSvg(stats, state, todayISO));

  console.log(JSON.stringify({ todayISO, ...stats, state }, null, 2));
}

module.exports = { decideState, computeStats };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
