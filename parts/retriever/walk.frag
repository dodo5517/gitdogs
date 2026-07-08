<g transform="translate(-2,50)">

  <!-- 화면을 가로지르며 걷는 골든 리트리버 (다크 카라멜 골드 버전) / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 픽셀 틈새 0% -->
  <!-- 팔레트: 카라멜 골드 #D48C3D, 다크 골드(귀/음영) #AA6323, 애프리콧 장식털 #E8BB7D, 눈코 #24150D, 혀 #E08796 -->

  <g>
    <!-- 화면 왼쪽 밖에서 오른쪽 밖으로 이동하는 애니메이션 -->
    

    <!-- 지면 그림자 (발바닥 y=66 지면에 정확히 정렬) -->
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 몸통 그룹: 걸음에 맞춰 들썩임 (0.6초 주기, 2px 위아래, discrete) -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 2; 0 0" keyTimes="0; 0.5; 1" dur="0.6s"
        calcMode="discrete" repeatCount="indefinite"/>

      <!-- 메인 바디 & 두상 (베이스 골드 #D48C3D) -->
      <g fill="#D48C3D">
        <!-- 둥근 두상과 이마 꺾임(Stop) -->
        <rect x="108" y="6" width="18" height="6"/> <!-- 정수리 -->
        <rect x="108" y="12" width="24" height="6"/> <!-- 눈가 및 윗머리 -->
        <rect x="132" y="12" width="12" height="6"/> <!-- 두툼한 주둥이 윗부분 -->
        <rect x="108" y="18" width="24" height="6"/> <!-- 뺨 -->
        <rect x="108" y="24" width="18" height="6"/> <!-- 튼튼한 목 -->
        
        <!-- 몸통 (탄탄하고 평평한 등) -->
        <rect x="42" y="18" width="66" height="6"/> <!-- 등(Topline) -->
        <rect x="36" y="24" width="72" height="12"/> <!-- 몸통 중앙 -->
        <rect x="36" y="36" width="6" height="6"/> <!-- 엉덩이 굴곡 -->
      </g>

      <!-- 애프리콧 크림색 장식털 (가슴, 배, 주둥이 아래 #E8BB7D) -->
      <g fill="#E8BB7D">
        <!-- 턱과 웃는 입 베이스 -->
        <rect x="132" y="18" width="12" height="6"/> 
        
        <!-- 앞으로 풍성하게 튀어나온 가슴섶 털(Ruff) -->
        <rect x="108" y="30" width="18" height="6"/>
        <rect x="108" y="36" width="12" height="6"/>
        
        <!-- 배 아래 장식털 -->
        <rect x="42" y="36" width="66" height="6"/> 
        
        <!-- 배 아래 흩날리는 프린지 (들쭉날쭉한 계단식 질감) -->
        <rect x="48" y="42" width="6" height="6"/>
        <rect x="60" y="42" width="6" height="6"/>
        <rect x="72" y="42" width="6" height="6"/>
        <rect x="84" y="42" width="6" height="6"/>
        <rect x="96" y="42" width="6" height="6"/>
      </g>

      <!-- 부드러운 인상의 눈 & 코 (#24150D) -->
      <g fill="#24150D">
        <rect x="120" y="12" width="6" height="6"/> <!-- 눈 -->
        <rect x="144" y="12" width="6" height="6"/> <!-- 코 -->
      </g>

      <!-- 리트리버의 시그니처, 차분한 핑크색 혀(웃는 표정) -->
      <rect x="144" y="18" width="6" height="6" fill="#E08796"/>

      <!-- 늘어진 귀 (다크 골드, 반박자 늦게 들썩임) -->
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 2; 0 0" keyTimes="0; 0.5; 1" dur="0.6s" begin="0.15s"
          calcMode="discrete" repeatCount="indefinite"/>
        <!-- 뺨을 덮으며 아래로 처진 큰 귓바퀴 -->
        <rect x="108" y="12" width="12" height="18" fill="#AA6323"/>
      </g>

      <!-- 깃털 꼬리 (Flag Tail: 풍성하게 위아래로 흔들림) -->
      <g>
        <!-- 프레임 1: 살짝 아래로 자연스럽게 내린 상태 -->
        <g>
          <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="30" y="24" width="6" height="6" fill="#D48C3D"/> <!-- 꼬리 베이스 -->
          <rect x="18" y="24" width="12" height="6" fill="#D48C3D"/> <!-- 꼬리 윗면 -->
          <rect x="12" y="30" width="6" height="6" fill="#D48C3D"/> <!-- 꼬리 끝 -->
          
          <!-- 꼬리 아랫면 애프리콧 장식털 -->
          <rect x="18" y="30" width="12" height="6" fill="#E8BB7D"/>
          <rect x="18" y="36" width="6" height="6" fill="#AA6323"/> <!-- 프린지 음영 -->
        </g>
        <!-- 프레임 2: 걸음에 맞춰 위로 살짝 흔든 상태 -->
        <g opacity="0">
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="30" y="24" width="6" height="6" fill="#D48C3D"/>
          <rect x="24" y="18" width="12" height="6" fill="#D48C3D"/>
          <rect x="18" y="12" width="6" height="6" fill="#D48C3D"/>
          
          <!-- 꼬리 아랫면 애프리콧 장식털 -->
          <rect x="24" y="24" width="12" height="6" fill="#E8BB7D"/>
          <rect x="24" y="30" width="6" height="6" fill="#AA6323"/>
        </g>
      </g>
    </g> <!-- 몸통 그룹 끝 -->

    <!-- 튼튼한 다리 걷기 (2프레임 대각선 교대, 지면 y=66에 정확히 닿음) -->
    <!-- 프레임 A: 앞왼(딛음), 뒷오른(딛음) / 앞오른(들음), 뒷왼(들음) -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <!-- 딛은 다리 (지면까지 닿음, 길이 24px) -->
      <rect x="96" y="42" width="12" height="24" fill="#D48C3D"/> <!-- 앞다리 왼 (Foreground) -->
      <rect x="60" y="42" width="12" height="24" fill="#AA6323"/> <!-- 뒷다리 오른 (Background) -->
      <!-- 든 다리 (짧음, 길이 12px) -->
      <rect x="48" y="42" width="12" height="12" fill="#D48C3D"/> <!-- 뒷다리 왼 (Foreground) -->
      <rect x="108" y="42" width="12" height="12" fill="#AA6323"/> <!-- 앞다리 오른 (Background) -->
    </g>

    <!-- 프레임 B: 앞오른(딛음), 뒷왼(딛음) / 앞왼(들음), 뒷오른(들음) -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <!-- 딛은 다리 -->
      <rect x="48" y="42" width="12" height="24" fill="#D48C3D"/> <!-- 뒷다리 왼 (Foreground) -->
      <rect x="108" y="42" width="12" height="24" fill="#AA6323"/> <!-- 앞다리 오른 (Background) -->
      <!-- 든 다리 -->
      <rect x="96" y="42" width="12" height="12" fill="#D48C3D"/> <!-- 앞다리 왼 (Foreground) -->
      <rect x="60" y="42" width="12" height="12" fill="#AA6323"/> <!-- 뒷다리 오른 (Background) -->
    </g>
  </g>

</g>