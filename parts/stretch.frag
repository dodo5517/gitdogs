<g transform="translate(-100,-4)">

  <!-- 1. 기지개 (다운독 자세 & 하품) -->
  <!-- 색상: 브라운 #A0672F, 진갈색 #6B4423, 탠 #D9B285, 눈/코 #2E1F14, 혀 #ED94A4 -->
  <g transform="translate(100, 46)">
    
    <!-- 바닥 그림자 (스트레칭 시 앞뒤로 길어짐) -->
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12">
      <animate attributeName="rx" values="82; 100; 100; 82" keyTimes="0; 0.2; 0.8; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <animate attributeName="cx" values="84; 96; 96; 84" keyTimes="0; 0.2; 0.8; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
    </ellipse>

    <!-- 고정된 뒷다리 -->
    <rect x="18" y="54" width="12" height="6" fill="#A0672F"/>
    <rect x="18" y="60" width="12" height="6" fill="#D9B285"/>
    <rect x="36" y="54" width="12" height="6" fill="#6B4423"/>
    
    <!-- 꼬리 흔들기 -->
    <rect x="12" y="24" width="6" height="6" fill="#A0672F"/>
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="0" y="12" width="6" height="6" fill="#A0672F"/>
      <rect x="6" y="18" width="6" height="6" fill="#A0672F"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="0" y="6" width="6" height="6" fill="#A0672F"/>
      <rect x="6" y="12" width="6" height="6" fill="#A0672F"/>
    </g>

    <!-- ========================================== -->
    <!-- 프레임 A: 서 있는 기본 자세 (0~1초, 3.5~4초) -->
    <!-- ========================================== -->
    <g>
      <animate attributeName="opacity" values="1;0;0;1" keyTimes="0; 0.25; 0.875; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <!-- 기본 몸통 -->
      <rect x="12" y="30" width="120" height="24" fill="#A0672F"/>
      <rect x="24" y="48" width="96" height="6" fill="#D9B285"/>
      <!-- 앞다리 -->
      <rect x="102" y="54" width="12" height="6" fill="#6B4423"/>
      <rect x="120" y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="120" y="60" width="12" height="6" fill="#D9B285"/>
      <!-- 머리 -->
      <rect x="120" y="12" width="30" height="24" fill="#A0672F"/>
      <rect x="120" y="18" width="12" height="18" fill="#6B4423"/>
      <rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
      <rect x="150" y="24" width="18" height="6" fill="#D9B285"/>
      <rect x="162" y="18" width="6" height="6" fill="#2E1F14"/>
      <rect x="138" y="18" width="6" height="6" fill="#2E1F14"/>
    </g>

    <!-- ========================================== -->
    <!-- 프레임 B: 쭉 뻗은 기지개 자세 (1초~3.5초) -->
    <!-- 6px 블록 단위로 몸통을 계단식으로 낮춰 활처럼 휜 형태를 완벽 구현 -->
    <!-- ========================================== -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0; 0.25; 0.875; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      
      <!-- 휘어진 몸통 (3단계 계단식 하강) -->
      <!-- 엉덩이 (가장 높음) -->
      <rect x="12" y="30" width="30" height="24" fill="#A0672F"/>
      <rect x="24" y="48" width="18" height="6" fill="#D9B285"/>
      <!-- 허리 (중간) -->
      <rect x="42" y="36" width="36" height="24" fill="#A0672F"/>
      <rect x="42" y="54" width="36" height="6" fill="#D9B285"/>
      <!-- 가슴 (가장 낮음) -->
      <rect x="78" y="42" width="36" height="24" fill="#A0672F"/>
      <rect x="78" y="60" width="36" height="6" fill="#D9B285"/>
      
      <!-- 땅에 밀착해 앞으로 뻗은 앞다리 -->
      <rect x="114" y="54" width="30" height="6" fill="#A0672F"/>
      <rect x="144" y="54" width="12" height="6" fill="#D9B285"/>
      <rect x="114" y="48" width="18" height="6" fill="#6B4423"/>

      <!-- 바닥으로 낮아진 머리 -->
      <rect x="114" y="36" width="30" height="24" fill="#A0672F"/>
      <rect x="114" y="42" width="12" height="18" fill="#6B4423"/>
      <rect x="144" y="42" width="12" height="6" fill="#A0672F"/>
      <rect x="156" y="42" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->

      <!-- 하품 애니메이션 (입 벌림 + 눈 감음) -->
      <g>
        <!-- 평소 입과 눈 -->
        <animate attributeName="opacity" values="1;0;1" keyTimes="0; 0.4; 0.7" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="144" y="48" width="18" height="6" fill="#D9B285"/> <!-- 닫힌 주둥이 -->
        <rect x="132" y="42" width="6" height="6" fill="#2E1F14"/> <!-- 뜬 눈 -->
      </g>
      <g opacity="0">
        <!-- 하품하는 입과 감은 눈 -->
        <animate attributeName="opacity" values="0;1;0" keyTimes="0; 0.4; 0.7" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="144" y="54" width="18" height="6" fill="#D9B285"/> <!-- 아래로 벌어진 주둥이 -->
        <rect x="144" y="48" width="12" height="6" fill="#2E1F14"/> <!-- 입 안 (검정) -->
        <rect x="156" y="48" width="6" height="6" fill="#ED94A4"/>  <!-- 혀 (분홍) -->
        <rect x="132" y="44" width="6" height="2" fill="#2E1F14"/> <!-- 꽉 감은 눈 -->
      </g>
    </g>

  </g>

</g>