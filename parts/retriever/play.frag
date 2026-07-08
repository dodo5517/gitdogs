<g transform="translate(-38,50)">

  <!-- 물어오기(retrieve): 공을 물고 자랑스럽게 걷기 / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자, 오른쪽 응시 고정, 발바닥 y=66 정렬 -->
  <!-- 팔레트: #D48C3D 골드 / #AA6323 다크골드 / #E8BB7D 애프리콧 / #24150D 눈코 / 공 #E05B3C -->
  <!-- 걸음 들썩임 0.6s + 꼬리 신나게 흔들기 -->

  <g transform="translate(30 0)">
    <ellipse cx="90" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 몸통 그룹: 걸음 들썩임 -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 2; 0 0" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>

      <!-- 두상 (자랑스럽게 살짝 든 고개) -->
      <g fill="#D48C3D">
        <rect x="120" y="6"  width="30" height="6"/>
        <rect x="120" y="12" width="36" height="6"/>
        <rect x="150" y="12" width="12" height="6"/>
        <rect x="120" y="18" width="30" height="6"/>
        <rect x="120" y="24" width="24" height="6"/> <!-- 목 -->
      </g>
      <!-- 몸통 두툼하게 -->
      <g fill="#D48C3D">
        <rect x="42" y="18" width="78" height="6"/>
        <rect x="36" y="24" width="84" height="18"/> <!-- 몸통 중앙(두툼) -->
        <rect x="36" y="42" width="12" height="6"/>
      </g>
      <!-- 애프리콧 -->
      <g fill="#E8BB7D">
        <rect x="150" y="18" width="12" height="6"/> <!-- 턱 -->
        <rect x="120" y="30" width="18" height="6"/> <!-- 가슴섶 -->
        <rect x="42" y="42" width="72" height="6"/>  <!-- 배 -->
      </g>
      <!-- 눈코 -->
      <g fill="#24150D">
        <rect x="138" y="12" width="6" height="6"/>
        <rect x="162" y="12" width="6" height="6"/> <!-- 코 -->
      </g>
      <!-- 물고 있는 공 (입 앞) -->
      <g>
        <rect x="162" y="18" width="18" height="18" fill="#E05B3C"/>
        <rect x="168" y="18" width="6"  height="6"  fill="#F0836A"/> <!-- 하이라이트 -->
      </g>
      <!-- 늘어진 귀 -->
      <rect x="120" y="12" width="12" height="18" fill="#AA6323"/>

      <!-- 신나게 든 꼬리 (2프레임 크게 흔들) -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="24" y="6"  width="12" height="6" fill="#D48C3D"/>
        <rect x="30" y="12" width="6"  height="6" fill="#D48C3D"/>
        <rect x="18" y="6"  width="6"  height="6" fill="#E8BB7D"/>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="24" y="0"  width="12" height="6" fill="#D48C3D"/>
        <rect x="30" y="6"  width="6"  height="6" fill="#D48C3D"/>
        <rect x="18" y="0"  width="6"  height="6" fill="#E8BB7D"/>
      </g>
    </g>

    <!-- 다리 걷기 2프레임 -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="102" y="48" width="12" height="18" fill="#D48C3D"/>
      <rect x="66"  y="48" width="12" height="18" fill="#AA6323"/>
      <rect x="54"  y="48" width="12" height="12" fill="#D48C3D"/>
      <rect x="114" y="48" width="12" height="12" fill="#AA6323"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="54"  y="48" width="12" height="18" fill="#D48C3D"/>
      <rect x="114" y="48" width="12" height="18" fill="#AA6323"/>
      <rect x="102" y="48" width="12" height="12" fill="#D48C3D"/>
      <rect x="66"  y="48" width="12" height="12" fill="#AA6323"/>
    </g>
  </g>

</g>