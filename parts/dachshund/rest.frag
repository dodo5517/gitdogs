<g transform="translate(-344,-8)">

  <!-- 3. 바닥에 엎드려 쉬기 (Awake Sploot) / 눈 깜빡임, 꼬리 까딱, 귀 쫑긋 추가 -->
  <!-- 중앙에 배치 (translate 360, 46) -->
  <g transform="translate(360, 46)">
    
    <!-- 바닥 그림자 (엎드린 몸에 맞춰 넓게 퍼짐) -->
    <ellipse cx="84" cy="74" rx="100" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 바닥에 앞뒤로 뻗은 다리 (기존 12x6 블록 유지) -->
    <!-- 뒤로 뻗은 뒷다리 -->
    <rect x="0" y="66" width="12" height="6" fill="#A0672F"/> <!-- 브라운 -->
    <rect x="-12" y="66" width="12" height="6" fill="#D9B285"/> <!-- 탠 발끝 -->
    <!-- 앞으로 뻗은 앞다리 -->
    <rect x="132" y="66" width="12" height="6" fill="#A0672F"/> <!-- 브라운 -->
    <rect x="144" y="66" width="12" height="6" fill="#D9B285"/> <!-- 탠 발끝 -->

    <!-- 숨쉬기에 맞춰 상체가 아주 미세하게 오르내림 -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite"/>

      <!-- ========================================== -->
      <!-- [추가] 심심한 듯 까딱거리는 꼬리 (3.2초 주기) -->
      <!-- ========================================== -->
      <rect x="12" y="54" width="6" height="6" fill="#A0672F"/> <!-- 고정된 꼬리 베이스 -->
      <g>
        <!-- 바닥에 내려놓은 상태 (대부분의 시간 유지) -->
        <animate attributeName="opacity" values="1;0;1;0;1" keyTimes="0; 0.85; 0.9; 0.95; 1" dur="3.2s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="0" y="60" width="12" height="6" fill="#A0672F"/> 
      </g>
      <g opacity="0">
        <!-- 바닥을 톡톡 치며 위로 살짝 들린 꼬리 -->
        <animate attributeName="opacity" values="0;1;0;1;0" keyTimes="0; 0.85; 0.9; 0.95; 1" dur="3.2s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="6" y="48" width="6" height="6" fill="#A0672F"/>
        <rect x="0" y="42" width="6" height="6" fill="#A0672F"/>
      </g>

      <!-- 기존 베이스 몸통 100% 동일, y축만 18px 내려 바닥에 닿게 함 -->
      <rect x="12" y="48" width="120" height="24" fill="#A0672F"/>
      <rect x="24" y="66" width="96" height="6" fill="#D9B285"/> <!-- 바닥에 닿은 배 -->
      <rect x="120" y="30" width="30" height="24" fill="#A0672F"/> <!-- 머리 베이스 -->
      
      <!-- ========================================== -->
      <!-- [추가] 주변 소리에 가끔 쫑긋 반응하는 귀 (5초 주기) -->
      <!-- ========================================== -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0; 0.5; 0.55" dur="5s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="120" y="36" width="12" height="18" fill="#6B4423"/> <!-- 편안하게 축 늘어진 귀 -->
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0; 0.5; 0.55" dur="5s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="120" y="36" width="12" height="12" fill="#6B4423"/> <!-- 살짝 바깥으로 튕기듯 접힌 귀 -->
        <rect x="126" y="48" width="6" height="6" fill="#6B4423"/>
      </g>

      <rect x="150" y="36" width="12" height="6" fill="#A0672F"/>  <!-- 윗 주둥이 -->
      <rect x="150" y="42" width="18" height="6" fill="#D9B285"/>  <!-- 아랫 주둥이 -->
      <rect x="162" y="36" width="6" height="6" fill="#2E1F14"/>   <!-- 코 -->
      
      <!-- ========================================== -->
      <!-- [추가] 자연스러운 눈 깜빡임 (4초 주기) -->
      <!-- ========================================== -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0; 0.9; 0.95" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="138" y="36" width="6" height="6" fill="#2E1F14"/> <!-- 동그랗게 뜬 눈 -->
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0; 0.9; 0.95" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="138" y="40" width="6" height="2" fill="#2E1F14"/> <!-- 가볍게 감은 눈 -->
      </g>
      
    </g>
  </g>

</g>