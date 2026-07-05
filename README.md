# gitdogs

GitHub 잔디로 키우는 픽셀 강아지.

<picture>
  <img alt="dog" src="https://github.com/dodo5517/gitdogs/raw/output/dist/dog.svg" width="100%">
</picture>

![stats](https://github.com/dodo5517/gitdogs/raw/output/dist/stats.svg)

커밋을 많이 하면 신나서 뛰어다니고, 안 하면 얌전해지다가, 일주일 내내 커밋이 없으면 잠들어 버립니다. 서버 없이 GitHub Actions와 정적 SVG만으로 동작합니다.

## 상태

3시간마다 최근 1년의 contribution 데이터를 조회해 오늘의 상태를 결정합니다.

| 상태      | 조건                        | 강아지                             |
| --------- | --------------------------- | ---------------------------------- |
| zoomies   | 오늘 커밋 20개 이상         | 질주, 플레이 바우, 점프            |
| active    | 오늘 10~19개                | 빠른 걷기, 흙파기, 털기            |
| normal    | 오늘 1~9개                  | 산책, 냄새 맡기, 그루밍            |
| calm      | 오늘 0개 (주간 커밋은 있음) | 기지개, 졸기, 조르기               |
| sleepy    | 일주일 내내 0개             | 잠만 잔다                          |
| celebrate | 스트릭 7/30/100/365일 달성  | 짖으며 축제                        |
| greet     | 이 레포에 push한 직후       | 달려와서 환영 (1분 뒤 원래 상태로) |

같은 상태에도 장면 변형이 여러 개 있어 실행 시각에 따라 다른 연출이 나옵니다.

## 동작 원리

```
GitHub Actions (3시간마다 + push 시)
  └─ generate.js
       ├─ GraphQL로 contribution 캘린더 조회
       ├─ decideState(): 커밋 통계 -> 상태 (순수 함수)
       └─ compose.js: 상태별 장면을 하나의 SVG로 합성
            └─ dist/dog.svg, dist/stats.svg
  └─ publish.sh: output 브랜치에 단일 커밋으로 발행 (force push로 덮어씀)
```

- 상태 결정은 결정적(deterministic)입니다. 같은 입력이면 항상 같은 결과가 나오므로 서버나 DB 없이 동작합니다.
- 장면은 모션 부품(parts/)을 마스터 타임라인 위에 배치해 합성합니다. 각 부품은 6px 격자 픽셀아트에 SMIL 애니메이션만 사용해 GitHub README의 img 태그 안에서 그대로 동작합니다.
- 산출물은 output 브랜치에 커밋 1개로만 유지되어 main 히스토리를 오염시키지 않습니다.

## 직접 키우기

1. 이 레포를 포크하거나 템플릿으로 새 레포를 만듭니다.
2. Personal Access Token(read:user 권한)을 만들어 레포 Secrets에 `GH_PAT`로 등록합니다.
3. main에 아무 커밋이나 푸시하면 워크플로우가 실행되고 output 브랜치가 생성됩니다.
4. 프로필 README에 이미지를 추가합니다:

```markdown
![dog](https://github.com/<사용자명>/<레포명>/raw/output/dist/dog.svg)

![stats](https://github.com/<사용자명>/<레포명>/raw/output/dist/stats.svg)
```

시간대가 KST가 아니라면 `.github/workflows/dog.yml`의 `TZ_OFFSET_HOURS`를 조정하세요.

## 로컬 테스트

```bash
# 임의 수치로 상태 판정과 SVG 생성 확인 (토큰 불필요)
node generate.js --mock "today=12,week=30,streak=5"

# 실제 데이터로 확인
GITHUB_TOKEN=<PAT> GITHUB_USERNAME=<사용자명> node generate.js

# 단위 테스트
node --test generate.test.js
```

생성된 `dist/dog.svg`를 브라우저로 열면 애니메이션을 확인할 수 있습니다.

## 구조

```
assets/     모션 원본 SVG 14종 (걷기, 뛰기, 잠자기, 흙파기, 플레이 바우 등)
parts/      원점과 지면선을 정규화한 합성용 부품
compose.js  장면 합성기 (타임라인 배치, 방향 연속성, 화면 경계 검증)
generate.js 상태 결정과 SVG 생성
publish.sh  output 브랜치 발행
```
