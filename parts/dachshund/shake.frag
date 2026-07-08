<g transform="translate(-100,-4)">

  <!-- 4. 부르르 털기 (머리 -> 몸통 순차적 진동) -->
  <!-- 색상: 브라운 #A0672F, 진갈색 #6B4423, 탠 #D9B285, 눈/코 #2E1F14 -->
  <g transform="translate(100, 46)">
    
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 털 때 다리는 바닥에 고정됨 -->
    <rect x="18" y="54" width="12" height="6" fill="#A0672F"/><rect x="18" y="60" width="12" height="6" fill="#D9B285"/>
    <rect x="36" y="54" width="12" height="6" fill="#6B4423"/><rect x="102" y="54" width="12" height="6" fill="#6B4423"/>
    <rect x="120" y="54" width="12" height="6" fill="#A0672F"/><rect x="120" y="60" width="12" height="6" fill="#D9B285"/>

    <!-- ========================================== -->
    <!-- 2단계: 몸통 부르르 털기 (머리 털기가 끝날 즈음 시작) -->
    <!-- ========================================== -->
    <g>
      <!-- 4초 주기 중 1.4초~2.2초 구간에 상하좌우 진동 -->
      <animateTransform attributeName="transform" type="translate" 
        values="0,0; -6,6; 6,-6; -6,6; 6,-6; 0,0; 0,0" 
        keyTimes="0; 0.35; 0.40; 0.45; 0.50; 0.55; 1" 
        dur="4s" calcMode="discrete" repeatCount="indefinite"/>

      <rect x="12" y="30" width="120" height="24" fill="#A0672F"/>
      <rect x="24" y="48" width="96" height="6" fill="#D9B285"/>
      <rect x="12" y="24" width="6" height="6" fill="#A0672F"/> <!-- 꼬리 베이스 -->
      
      <!-- 몸 털 때 꼬리 잔상 -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0; 0.35; 0.55" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="0" y="12" width="6" height="6" fill="#A0672F"/>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0; 0.35; 0.55" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="0" y="6" width="6" height="6" fill="#A0672F"/>
      </g>
    </g>

    <!-- ========================================== -->
    <!-- 1단계: 머리 부르르 털기 (가장 먼저 시작) -->
    <!-- ========================================== -->
    <g>
      <!-- 4초 주기 중 1.0초~1.8초 구간에 좌우로 격하게 진동 -->
      <animateTransform attributeName="transform" type="translate" 
        values="0,0; -6,0; 6,0; -6,0; 6,0; -6,0; 6,0; 0,0; 0,0" 
        keyTimes="0; 0.25; 0.30; 0.35; 0.40; 0.45; 0.45; 0.50; 1" 
        dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        
      <rect x="120" y="12" width="30" height="24" fill="#A0672F"/>
      <rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
      <rect x="150" y="24" width="18" height="6" fill="#D9B285"/>
      <rect x="162" y="18" width="6" height="6" fill="#2E1F14"/>
      <rect x="138" y="20" width="6" height="2" fill="#2E1F14"/> <!-- 털 때 눈 질끈 감음 -->

      <!-- 털 때 양옆으로 날아가는 펄럭이는 귀 애니메이션 -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0; 0.25; 0.50" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="120" y="18" width="12" height="18" fill="#6B4423"/> <!-- 평소 차분한 귀 -->
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0; 0.25; 0.50" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <!-- 좌우로 수평으로 날아가는 귀 조각들 -->
        <rect x="108" y="12" width="12" height="6" fill="#6B4423"/> <!-- 뒤쪽 펄럭임 -->
        <rect x="150" y="12" width="12" height="6" fill="#6B4423"/> <!-- 앞쪽 펄럭임 -->
      </g>
    </g>

    <!-- 털 때 튀는 물방울/먼지 이펙트 -->
    <g opacity="0">
      <animate attributeName="opacity" values="0; 1; 0" keyTimes="0; 0.3; 0.55" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="100" y="0" width="6" height="6" fill="#D9B285"/>
      <rect x="160" y="-12" width="6" height="6" fill="#A0672F"/>
      <rect x="180" y="18" width="6" height="6" fill="#6B4423"/>
    </g>

  </g>

</g>