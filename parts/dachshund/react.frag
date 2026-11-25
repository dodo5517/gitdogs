<g transform="translate(-360,4)">

  <!-- 제 꼬리를 물려고 제자리에서 빙글빙글 도는 닥스훈트 (react) / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자, 발바닥 y=66 기준. 0.6초에 한 바퀴: 왼쪽으로 몸 말기 → 뒷모습 → 오른쪽으로 몸 말기 → 뒷모습 -->
  <!-- 색상: 브라운 #A0672F, 진갈색 #6B4423, 탠 #D9B285, 눈/코 #2E1F14 -->
  <g transform="translate(360, 46)">
    <ellipse cx="72" cy="70" rx="66" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 꼬리 쪽(왼쪽)으로 몸을 만 모습 -->
    <g>
      <animate attributeName="opacity" values="1;0;0;0;1" keyTimes="0;0.25;0.5;0.75;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="54" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 뒷다리 -->
      <rect x="108" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 앞다리 -->
      <rect x="30" y="36" width="84" height="18" fill="#A0672F"/> <!-- 둥글게 만 긴 몸통 -->
      <rect x="36" y="48" width="72" height="6" fill="#D9B285"/> <!-- 배 -->
      <rect x="42" y="54" width="12" height="6" fill="#A0672F"/> <!-- 뒷다리 -->
      <rect x="42" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="96" y="54" width="12" height="6" fill="#A0672F"/> <!-- 앞다리 -->
      <rect x="96" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="96" y="24" width="18" height="12" fill="#A0672F"/> <!-- 뒤로 휘어진 목 -->
      <rect x="66" y="18" width="30" height="18" fill="#A0672F"/> <!-- 등 위로 돌린 머리 -->
      <rect x="54" y="24" width="12" height="6" fill="#A0672F"/> <!-- 주둥이 -->
      <rect x="54" y="30" width="12" height="6" fill="#D9B285"/> <!-- 아래턱 -->
      <rect x="48" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
      <rect x="72" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 눈 -->
      <rect x="90" y="24" width="12" height="18" fill="#6B4423"/> <!-- 펄럭이는 귀 -->
      <rect x="18" y="30" width="18" height="6" fill="#A0672F"/> <!-- 꼬리 -->
      <rect x="30" y="24" width="18" height="6" fill="#A0672F"/> <!-- 코끝에 닿은 꼬리 끝 -->
      <rect x="132" y="60" width="6" height="6" fill="#D9B285"/> <!-- 흙먼지 -->
      <rect x="138" y="54" width="6" height="6" fill="#D9B285"/>
    </g>

    <!-- 도는 중: 뒷모습 -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0;0;0" keyTimes="0;0.25;0.5;0.75;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="66" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 다리 -->
      <rect x="54" y="30" width="36" height="24" fill="#A0672F"/> <!-- 뒤에서 본 몸통 -->
      <rect x="60" y="48" width="24" height="6" fill="#D9B285"/> <!-- 배 -->
      <rect x="54" y="54" width="12" height="6" fill="#A0672F"/> <!-- 다리 -->
      <rect x="54" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="78" y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="78" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="84" y="18" width="6" height="12" fill="#A0672F"/> <!-- 번쩍 든 꼬리 -->
      <rect x="84" y="12" width="12" height="6" fill="#A0672F"/>
      <rect x="30" y="18" width="30" height="18" fill="#A0672F"/> <!-- 옆으로 돌린 머리 -->
      <rect x="18" y="24" width="12" height="6" fill="#A0672F"/> <!-- 주둥이 -->
      <rect x="18" y="30" width="12" height="6" fill="#D9B285"/> <!-- 아래턱 -->
      <rect x="18" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
      <rect x="36" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 눈 -->
      <rect x="48" y="24" width="12" height="18" fill="#6B4423"/> <!-- 귀 -->
      <rect x="6" y="60" width="6" height="6" fill="#D9B285"/> <!-- 흙먼지 -->
      <rect x="0" y="54" width="6" height="6" fill="#D9B285"/>
    </g>

    <!-- 반대쪽(오른쪽)으로 몸을 만 모습 -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.25;0.5;0.75;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="78" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 뒷다리 -->
      <rect x="24" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 앞다리 -->
      <rect x="30" y="36" width="84" height="18" fill="#A0672F"/> <!-- 둥글게 만 긴 몸통 -->
      <rect x="36" y="48" width="72" height="6" fill="#D9B285"/> <!-- 배 -->
      <rect x="90" y="54" width="12" height="6" fill="#A0672F"/> <!-- 뒷다리 -->
      <rect x="90" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="36" y="54" width="12" height="6" fill="#A0672F"/> <!-- 앞다리 -->
      <rect x="36" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="30" y="24" width="18" height="12" fill="#A0672F"/> <!-- 뒤로 휘어진 목 -->
      <rect x="48" y="18" width="30" height="18" fill="#A0672F"/> <!-- 등 위로 돌린 머리 -->
      <rect x="78" y="24" width="12" height="6" fill="#A0672F"/> <!-- 주둥이 -->
      <rect x="78" y="30" width="12" height="6" fill="#D9B285"/> <!-- 아래턱 -->
      <rect x="90" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
      <rect x="66" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 눈 -->
      <rect x="42" y="24" width="12" height="18" fill="#6B4423"/> <!-- 펄럭이는 귀 -->
      <rect x="108" y="30" width="18" height="6" fill="#A0672F"/> <!-- 꼬리 -->
      <rect x="108" y="24" width="12" height="6" fill="#A0672F"/>
      <rect x="114" y="18" width="12" height="6" fill="#A0672F"/> <!-- 도망가는 꼬리 끝 -->
      <rect x="6" y="60" width="6" height="6" fill="#D9B285"/> <!-- 흙먼지 -->
      <rect x="0" y="54" width="6" height="6" fill="#D9B285"/>
    </g>

    <!-- 도는 중: 뒷모습 (반대 방향) -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;0;1;0" keyTimes="0;0.25;0.5;0.75;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="66" y="54" width="12" height="6" fill="#6B4423"/> <!-- 먼 쪽 다리 -->
      <rect x="54" y="30" width="36" height="24" fill="#A0672F"/> <!-- 뒤에서 본 몸통 -->
      <rect x="60" y="48" width="24" height="6" fill="#D9B285"/> <!-- 배 -->
      <rect x="78" y="54" width="12" height="6" fill="#A0672F"/> <!-- 다리 -->
      <rect x="78" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="54" y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="54" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="54" y="18" width="6" height="12" fill="#A0672F"/> <!-- 번쩍 든 꼬리 -->
      <rect x="48" y="12" width="12" height="6" fill="#A0672F"/>
      <rect x="84" y="18" width="30" height="18" fill="#A0672F"/> <!-- 옆으로 돌린 머리 -->
      <rect x="114" y="24" width="12" height="6" fill="#A0672F"/> <!-- 주둥이 -->
      <rect x="114" y="30" width="12" height="6" fill="#D9B285"/> <!-- 아래턱 -->
      <rect x="120" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
      <rect x="102" y="24" width="6" height="6" fill="#2E1F14"/> <!-- 눈 -->
      <rect x="84" y="24" width="12" height="18" fill="#6B4423"/> <!-- 귀 -->
      <rect x="132" y="60" width="6" height="6" fill="#D9B285"/> <!-- 흙먼지 -->
      <rect x="138" y="54" width="6" height="6" fill="#D9B285"/>
    </g>
  </g>

</g>
