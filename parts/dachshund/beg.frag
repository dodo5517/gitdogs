<g transform="translate(-392,2)">

  <!-- 2. 두 발로 서서 조르기 / 중앙 고정 / 앞발 흔들기 -->
  <g transform="translate(400, 10)">
    
    <!-- 바닥 그림자 -->
    <ellipse cx="42" cy="100" rx="50" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 바닥에 깔고 앉은 꼬리 (위아래로 흔들림) -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="6" y="96" width="18" height="6" fill="#A0672F"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="0" y="90" width="18" height="6" fill="#A0672F"/>
    </g>

    <!-- 바닥을 딛고 앉은 엉덩이와 뒷다리 -->
    <rect x="18" y="96" width="24" height="6" fill="#D9B285"/> <!-- 쫙 편 뒷발 (탠) -->
    <rect x="24" y="66" width="36" height="30" fill="#A0672F"/> <!-- 엉덩이 베이스 -->
    <rect x="24" y="78" width="18" height="18" fill="#6B4423"/> <!-- 뒷다리 허벅지 (진갈색) -->

    <!-- 수직으로 곧게 세운 긴 허리와 배 -->
    <rect x="30" y="24" width="24" height="42" fill="#A0672F"/> <!-- 등 -->
    <rect x="54" y="24" width="6" height="42" fill="#D9B285"/> <!-- 배 (오른쪽을 향함) -->

    <!-- 오른쪽을 보고 있는 머리 -->
    <rect x="36" y="6" width="30" height="24" fill="#A0672F"/> <!-- 머리 베이스 -->
    <rect x="36" y="12" width="12" height="24" fill="#6B4423"/> <!-- 중력에 의해 수직으로 늘어진 귀 -->
    <rect x="66" y="12" width="12" height="6" fill="#A0672F"/> <!-- 윗 주둥이 -->
    <rect x="66" y="18" width="18" height="6" fill="#D9B285"/> <!-- 아랫 주둥이 -->
    <rect x="78" y="12" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
    <rect x="54" y="12" width="6" height="6" fill="#2E1F14"/> <!-- 눈 -->

    <!-- 위아래로 애교부리듯 흔드는 앞발 -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
      
      <!-- 몸 안쪽으로 꺾은 앞다리 형태 -->
      <rect x="54" y="42" width="18" height="6" fill="#A0672F"/> <!-- 팔 -->
      <rect x="72" y="42" width="6" height="12" fill="#D9B285"/> <!-- 아래로 꺾인 앞발 (탠) -->
    </g>

  </g>

</g>