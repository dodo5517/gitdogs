<g transform="translate(-2,50)">

  <!-- 킁킁거리며 천천히 앞으로 걷는 다크 카라멜 골든 리트리버 (Sniff & Walk) -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 픽셀 틈새 0% -->
  <!-- 몸통/다리/꼬리/귀는 0.8초 느린 걷기 리듬, 코끝은 0.4초 빠른 씰룩임 -->

  <g>
    <!-- 화면 왼쪽 밖에서 오른쪽 밖으로 아주 천천히 이동 (36초) -->
    

    <!-- 지면 그림자 -->
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 튼튼한 다리 걷기 (0.8초 느린 사이클, 지면 y=66에 정확히 닿음) -->
    <!-- 프레임 A: 앞왼(딛음), 뒷오른(딛음) / 뒷왼(들음), 앞오른(들음) -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
      <!-- 딛은 다리 (길이 24px) -->
      <rect x="96" y="42" width="12" height="24" fill="#D48C3D"/> <!-- 앞다리 왼 (Foreground) -->
      <rect x="60" y="42" width="12" height="24" fill="#AA6323"/> <!-- 뒷다리 오른 (Background) -->
      <!-- 든 다리 (짧음, 길이 12px) -->
      <rect x="48" y="42" width="12" height="12" fill="#D48C3D"/> <!-- 뒷다리 왼 (Foreground) -->
      <rect x="108" y="42" width="12" height="12" fill="#AA6323"/> <!-- 앞다리 오른 (Background) -->
    </g>

    <!-- 프레임 B: 뒷왼(딛음), 앞오른(딛음) / 앞왼(들음), 뒷오른(들음) -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
      <!-- 딛은 다리 -->
      <rect x="48" y="42" width="12" height="24" fill="#D48C3D"/> <!-- 뒷다리 왼 (Foreground) -->
      <rect x="108" y="42" width="12" height="24" fill="#AA6323"/> <!-- 앞다리 오른 (Background) -->
      <!-- 든 다리 -->
      <rect x="96" y="42" width="12" height="12" fill="#D48C3D"/> <!-- 앞다리 왼 (Foreground) -->
      <rect x="60" y="42" width="12" height="12" fill="#AA6323"/> <!-- 뒷다리 오른 (Background) -->
    </g>

    <!-- 몸통 그룹: 느린 걸음에 맞춰 들썩임 (0.8초 주기, 2px 위아래) -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 2; 0 0" keyTimes="0; 0.5; 1" dur="0.8s"
        calcMode="discrete" repeatCount="indefinite"/>

      <!-- 메인 바디 (베이스 골드) -->
      <g fill="#D48C3D">
        <rect x="42" y="18" width="66" height="6"/>  <!-- 등(Topline) -->
        <rect x="36" y="24" width="72" height="12"/> <!-- 몸통 중앙 -->
        <rect x="36" y="36" width="6" height="6"/>   <!-- 엉덩이 굴곡 -->
      </g>

      <!-- 몸통 장식털 (애프리콧 크림) -->
      <g fill="#E8BB7D">
        <rect x="42" y="36" width="66" height="6"/>  <!-- 배 -->
        <!-- 흩날리는 배 아래 프린지 -->
        <rect x="48" y="42" width="6" height="6"/>
        <rect x="60" y="42" width="6" height="6"/>
        <rect x="72" y="42" width="6" height="6"/>
        <rect x="84" y="42" width="6" height="6"/>
        <rect x="96" y="42" width="6" height="6"/>
      </g>

      <!-- 걸음에 맞춰 살랑거리는 깃털 꼬리 (0.8초 주기) -->
      <g>
        <!-- 프레임 1: 살짝 아래로 내린 상태 -->
        <g>
          <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="30" y="24" width="6" height="6" fill="#D48C3D"/> <!-- 꼬리 베이스 -->
          <rect x="18" y="30" width="12" height="6" fill="#D48C3D"/> <!-- 꼬리 윗면 -->
          <rect x="12" y="36" width="6" height="6" fill="#D48C3D"/> <!-- 꼬리 끝 -->
          
          <rect x="18" y="36" width="12" height="6" fill="#E8BB7D"/> <!-- 애프리콧 장식털 -->
          <rect x="18" y="42" width="6" height="6" fill="#AA6323"/>  <!-- 프린지 음영 -->
        </g>
        <!-- 프레임 2: 살짝 위로 흔든 상태 -->
        <g opacity="0">
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="30" y="24" width="6" height="6" fill="#D48C3D"/>
          <rect x="24" y="18" width="12" height="6" fill="#D48C3D"/>
          <rect x="18" y="12" width="6" height="6" fill="#D48C3D"/>
          
          <rect x="24" y="24" width="12" height="6" fill="#E8BB7D"/>
          <rect x="24" y="30" width="6" height="6" fill="#AA6323"/>
        </g>
      </g>

      <!-- 길게 뺀 목과 땅을 향해 숙인 머리 -->
      <g>
        <!-- 고정된 머리 & 목 파트 -->
        <g fill="#D48C3D">
          <rect x="108" y="24" width="18" height="24"/> <!-- 길게 뻗은 목 -->
          <rect x="126" y="36" width="18" height="6"/>  <!-- 정수리 -->
          <rect x="126" y="42" width="24" height="6"/>  <!-- 이마 -->
          <rect x="126" y="48" width="24" height="6"/>  <!-- 뺨 -->
        </g>
        <g fill="#E8BB7D">
          <rect x="108" y="48" width="18" height="6"/>  <!-- 목 장식털 상단 -->
          <rect x="114" y="54" width="12" height="12"/> <!-- 목 장식털 하단 -->
          <rect x="126" y="54" width="24" height="12"/> <!-- 턱/뺨 아래 장식털 -->
          <rect x="150" y="60" width="12" height="6"/>  <!-- 빈틈 방지용 입 베이스 -->
        </g>

        <!-- 걸음에 맞춰 반박자 늦게 들썩이는 귀 -->
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 2; 0 0" keyTimes="0; 0.5; 1" dur="0.8s" begin="0.2s"
            calcMode="discrete" repeatCount="indefinite"/>
          <rect x="126" y="42" width="12" height="18" fill="#AA6323"/> <!-- 늘어진 귀 -->
        </g>

        <rect x="138" y="48" width="6" height="6" fill="#24150D"/> <!-- 눈 -->

        <!-- 킁킁거리는 코끝 애니메이션 (걸음보다 2배 빠른 0.4초 씰룩임) -->
        <g>
          <!-- 프레임 1: 코가 내려간 상태 -->
          <g>
            <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
            <rect x="150" y="54" width="12" height="6" fill="#D48C3D"/> <!-- 주둥이 윗부분 -->
            <rect x="156" y="54" width="6" height="6" fill="#24150D"/>  <!-- 코 -->
          </g>
          <!-- 프레임 2: 코를 살짝 위로 들어 올린 상태 -->
          <g opacity="0">
            <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.4s" calcMode="discrete" repeatCount="indefinite"/>
            <rect x="150" y="48" width="12" height="6" fill="#D48C3D"/> <!-- 주둥이 윗부분 -->
            <rect x="150" y="54" width="12" height="6" fill="#E8BB7D"/> <!-- 주둥이 아랫부분 -->
            <rect x="156" y="48" width="6" height="6" fill="#24150D"/>  <!-- 코 -->
          </g>
        </g>
      </g>
    </g> <!-- 몸통 그룹 끝 -->
  </g>

</g>