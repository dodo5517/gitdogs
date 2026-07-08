<g transform="translate(-290,50)">

  <!-- 스플룻(Sploot) 자세로 쉬는 다크 카라멜 골든 리트리버 (Rest) / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자, 걷기 모델 팔레트/정체성 유지, 몸통을 두툼하게 보강 -->
  <!-- 팔레트: #D48C3D 골드 / #AA6323 다크골드 / #E8BB7D 애프리콧 / #24150D 눈코 / #E08796 혀 -->
  <!-- 정지 자세: 중앙 고정 배치 -->

  <g transform="translate(320 0)">
    <!-- 지면 그림자 (뻗은 체형에 맞춰 길게) -->
    <ellipse cx="72" cy="70" rx="102" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 1. 배경 다리 (다크 골드) -->
    <g fill="#AA6323">
      <rect x="6"   y="54" width="42" height="6"/>  <!-- 배경 뒷다리 뻗음 -->
      <rect x="120" y="54" width="42" height="6"/>  <!-- 배경 앞다리 뻗음 -->
    </g>

    <!-- 2. 몸통 언더레이 (숨쉴 때 틈 방지) -->
    <rect x="30" y="42" width="90" height="24" fill="#D48C3D"/>

    <!-- 3. 전경 다리 (골드, 뒤로/앞으로 뻗은 스플룻) -->
    <g fill="#D48C3D">
      <rect x="-6"  y="60" width="54" height="6"/>  <!-- 전경 뒷다리 -->
      <rect x="114" y="60" width="54" height="6"/>  <!-- 전경 앞다리 -->
    </g>
    <!-- 뻗은 발끝 밝은 털 -->
    <rect x="-6"  y="60" width="12" height="6" fill="#E8BB7D"/>
    <rect x="156" y="60" width="12" height="6" fill="#E8BB7D"/>

    <!-- 4. 게으른 꼬리 쿵쿵 (4초 주기 Thump) -->
    <g>
      <g>
        <animate attributeName="opacity" values="1;0;1;0;1;1" keyTimes="0;0.8;0.85;0.9;0.95;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="-12" y="54" width="30" height="6" fill="#D48C3D"/>
        <rect x="-24" y="60" width="42" height="6" fill="#E8BB7D"/>
        <rect x="-12" y="60" width="6"  height="6" fill="#AA6323"/>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0;1;0;0" keyTimes="0;0.8;0.85;0.9;0.95;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="-12" y="48" width="30" height="6" fill="#D48C3D"/>
        <rect x="-24" y="54" width="42" height="6" fill="#E8BB7D"/>
        <rect x="-12" y="54" width="6"  height="6" fill="#AA6323"/>
      </g>
    </g>

    <!-- 5. 편안하게 호흡하는 상단 몸통 (봉긋한 등, y축 -2px 들썩임) -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" keyTimes="0; 0.5; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="48" y="30" width="36" height="6" fill="#D48C3D"/> <!-- 봉긋한 등 정상(더 높게) -->
      <rect x="42" y="36" width="54" height="6" fill="#D48C3D"/> <!-- 등 상단 -->
      <rect x="36" y="42" width="72" height="6" fill="#D48C3D"/> <!-- 어깨~허리 -->
      <rect x="30" y="48" width="90" height="6" fill="#D48C3D"/> <!-- 몸통 폭 -->
      <!-- 등 위쪽 밝은 하이라이트 / 옆구리 음영 -->
      <rect x="42" y="36" width="12" height="6" fill="#E8BB7D"/>
      <rect x="30" y="48" width="12" height="6" fill="#AA6323"/> <!-- 어깨 앞 음영 -->
    </g>

    <!-- 바닥에 닿은 크림색 배 (고정) -->
    <rect x="36" y="60" width="78" height="6" fill="#E8BB7D"/>
    <!-- 옆구리 아래 다크 음영 (입체감) -->
    <rect x="30" y="54" width="18" height="6" fill="#AA6323"/>
    <rect x="102" y="54" width="12" height="6" fill="#AA6323"/>

    <!-- 6. 앞발에 기댄 머리 (정체성 유지, 위치만 내림) -->
    <g>
      <g fill="#D48C3D">
        <rect x="114" y="36" width="18" height="6"/> <!-- 정수리 -->
        <rect x="114" y="42" width="24" height="6"/> <!-- 윗머리 -->
        <rect x="138" y="42" width="12" height="6"/> <!-- 주둥이 윗부분 -->
        <rect x="114" y="48" width="24" height="6"/> <!-- 뺨 -->
        <rect x="108" y="54" width="24" height="6"/> <!-- 튼튼한 목 (몸통 연결) -->
      </g>
      <g fill="#E8BB7D">
        <rect x="138" y="48" width="12" height="6"/> <!-- 아랫턱 -->
        <rect x="114" y="60" width="24" height="6"/> <!-- 가슴섶(지면 닿음) -->
      </g>
      <g fill="#24150D">
        <rect x="126" y="42" width="6" height="6"/> <!-- 눈 -->
        <rect x="150" y="42" width="6" height="6"/> <!-- 코 -->
      </g>
      <rect x="150" y="48" width="6" height="6" fill="#E08796"/> <!-- 혀 -->
      <rect x="114" y="42" width="12" height="18" fill="#AA6323"/> <!-- 늘어진 귀 -->

      <!-- 나른한 눈 깜빡임 -->
      <g>
        <animate attributeName="opacity" values="0;1;0;1;0;0" keyTimes="0;0.45;0.48;0.52;0.55;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="126" y="42" width="6" height="6" fill="#AA6323"/>
      </g>
    </g>
  </g>

</g>