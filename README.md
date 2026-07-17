# gitdogs

GitHub 잔디로 키우는 픽셀 강아지.

<picture>
  <img alt="dog" src="https://github.com/dodo5517/gitdogs/raw/output/dist/dog.svg" width="100%">
</picture>

![stats](https://github.com/dodo5517/gitdogs/raw/output/dist/stats.svg)

커밋을 많이 하면 신나서 뛰어다니고, 안 하면 얌전해지다가, 일주일 내내 커밋이 없으면 잠들어 버립니다. 서버 없이 GitHub Actions와 정적 SVG만으로 동작합니다.

## 상태

3시간마다 최근 1년의 contribution 데이터를 조회해 오늘의 상태를 결정합니다.

| 상태      | 조건                                | 강아지                             |
| --------- | ----------------------------------- | ---------------------------------- |
| zoomies   | 오늘 커밋 10개 이상                 | 질주, 플레이 바우, 점프            |
| active    | 오늘 4~9개                          | 빠른 걷기, 놀이, 털기              |
| normal    | 오늘 1~3개                          | 산책, 냄새 맡기, 그루밍            |
| calm      | 오늘 0개 (주간 커밋은 있음)         | 기지개, 졸기, 휴식                 |
| sleepy    | 일주일 내내 0개                     | 잠자기                             |
| celebrate | 스트릭 5/10/30/50/70/100/365일 달성 | 짖으며 축하                        |
| greet     | 이 레포에 push한 직후               | 달려와서 환영 (1분 뒤 원래 상태로) |

같은 상태에도 장면 변형이 여러 개 있어 실행 시각에 따라 다른 연출이 나옵니다.

## 견종

두 견종을 지원하며, 저장소 변수로 하나를 골라 고정합니다.

| 견종     | BREED 값    | 특징               |
| -------- | ----------- | ------------------ |
| 닥스훈트 | `dachshund` | 긴 허리, 짧은 다리 |
| 리트리버 | `retriever` | 처진 귀, 깃털 꼬리 |

Settings → Secrets and variables → Actions → **Variables** 탭에서 `BREED` 변수를 만들어 값을 넣으면 강아지가 교체됩니다. 변수를 만들지 않으면 기본값 `dachshund`가 적용됩니다.

두 견종은 공통 모션 12종을 공유하고, 그 위에 견종 전용 슬롯(play·react·observe)을 각자의 방식으로 채웁니다. 예를 들어 play 슬롯은 리트리버가 공을, 닥스훈트가 막대기를 물고 달립니다. 슬롯 이름이 같으므로 상태와 장면 로직은 견종과 무관하게 동일하게 동작합니다.

## 동작 원리

```
GitHub Actions (3시간마다 + push 시)
  └─ generate.js
       ├─ GraphQL로 contribution 캘린더 조회
       ├─ decideState(): 커밋 통계 -> 상태 (순수 함수)
       └─ compose.js: 선택된 견종의 부품으로 장면을 하나의 SVG로 합성
            └─ dist/dog.svg, dist/stats.svg
  └─ publish.sh: output 브랜치에 단일 커밋으로 발행 (force push로 덮어씀)
```

- 상태 결정은 결정적(deterministic)입니다. 같은 입력이면 항상 같은 결과가 나오므로 서버나 DB 없이 동작합니다.
- 장면은 모션 부품(`parts/<견종>/`)을 마스터 타임라인 위에 배치해 합성합니다. 각 부품은 6px 격자 픽셀아트에 SMIL 애니메이션만 사용해 GitHub README의 img 태그 안에서 그대로 동작합니다.
- 부품은 그림자를 제외한 발바닥을 기준으로 지면에 정렬되므로, 견종이 달라도 같은 높이에서 걷습니다.
- 산출물은 output 브랜치에 커밋 1개로만 유지되어 main 히스토리를 오염시키지 않습니다.

## 직접 키우기

1. 이 레포를 포크하거나 템플릿으로 새 레포를 만듭니다.
2. Personal Access Token(read:user 권한)을 만들어 Settings → Secrets and variables → Actions → Secrets에 `GH_PAT`로 등록합니다.
3. (선택) 같은 화면의 Variables 탭에서 `BREED` 변수를 원하는 견종으로 설정합니다. 기본값은 `dachshund`입니다.
4. main에 아무 커밋이나 푸시하면 워크플로우가 실행되고 output 브랜치가 생성됩니다.
5. 프로필 README에 이미지를 추가합니다:

```markdown
![dog](https://github.com/<사용자명>/<레포명>/raw/output/dist/dog.svg)

![stats](https://github.com/<사용자명>/<레포명>/raw/output/dist/stats.svg)
```

시간대가 KST가 아니라면 `.github/workflows/dog.yml`의 `TZ_OFFSET_HOURS`를 조정하세요.

## 로컬 테스트

```bash
# 임의 수치로 상태 판정과 SVG 생성 확인 (토큰 불필요)
node generate.js --mock "today=12,week=30,streak=5"

# 견종을 지정해서 확인
BREED=retriever node generate.js --mock "today=12,week=30,streak=5"

# 실제 데이터로 확인
GITHUB_TOKEN=<PAT> GITHUB_USERNAME=<사용자명> node generate.js

# 단위 테스트
node --test generate.test.js
```

생성된 `dist/dog.svg`를 브라우저로 열면 애니메이션을 확인할 수 있습니다.

## 견종 추가하기

1. `assets/<견종>/`에 공통 12종(walk, run, sniff, sleep, rest, bark, lick, bounce, doze, shake, stretch, playbow)과 전용 슬롯 3종(play, react, observe)을 그려 넣습니다. play는 물고 달리는 이동형으로, react와 observe는 제자리 모션으로 만듭니다.
2. 정규화 스크립트를 돌려 `parts/<견종>/`을 생성합니다.
3. `BREED` 변수에 새 견종 이름을 넣습니다.

compose.js와 generate.js는 수정할 필요가 없습니다.

## 구조

```
assets/<견종>/   모션 원본 SVG (공통 12종 + 전용 슬롯 play·react·observe)
parts/<견종>/    발바닥 지면 정렬과 id 네임스페이스를 적용한 합성용 부품
compose.js       장면 합성기 (견종별 부품 로드, 타임라인 배치, 방향 연속성, 화면 경계 검증)
generate.js      상태 결정과 SVG 생성 (BREED 환경변수로 견종 선택)
publish.sh       output 브랜치 발행
```
