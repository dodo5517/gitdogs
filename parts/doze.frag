<g transform="translate(-88,-4)">

  <!-- 3. 앉아서 졸기 (식빵 자세에서 고개 떨구기) -->
  <g transform="translate(100, 46)">
    
    <!-- 바닥에 넓게 퍼진 엎드린 그림자 -->
    <ellipse cx="84" cy="70" rx="90" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 바닥에 밀착한 뒷다리 (뒤로 뻗음) -->
    <rect x="-6" y="60" width="12" height="6" fill="#A0672F"/>
    <rect x="-12" y="60" width="6" height="6" fill="#D9B285"/>
    
    <!-- 바닥에 밀착한 앞다리 (앞으로 뻗음) -->
    <rect x="132" y="60" width="12" height="6" fill="#A0672F"/>
    <rect x="144" y="60" width="6" height="6" fill="#D9B285"/>

    <!-- 바닥에 내려놓은 꼬리 -->
    <rect x="-6" y="42" width="18" height="6" fill="#A0672F"/>

    <!-- 베이스 몸통 100% 유지 (y축만 바닥으로 내림) -->
    <rect x="12" y="42" width="120" height="24" fill="#A0672F"/>
    <rect x="24" y="60" width="96" height="6" fill="#D9B285"/>

    <!-- 고개를 숙일 때 목이 분리되어 보이지 않도록 채워주는 안쪽 블록 -->
    <rect x="120" y="36" width="24" height="18" fill="#A0672F"/>

    <!-- ========================================== -->
    <!-- 머리 그룹 (천천히 숙이다 화들짝 깨기) -->
    <!-- ========================================== -->
    <g>
      <!-- 5초 주기: 천천히 바닥으로 떨어지다(0.85) 번쩍 들기(0.9) -->
      <animateTransform attributeName="transform" type="translate" 
        values="0,0; 0,6; 0,12; 0,12; 0,0; 0,0" 
        keyTimes="0; 0.3; 0.6; 0.85; 0.9; 1" 
        dur="5s" calcMode="discrete" repeatCount="indefinite"/>
      
      <!-- 머리 베이스 (엎드린 높이에 맞춤) -->
      <rect x="120" y="24" width="30" height="24" fill="#A0672F"/>
      <rect x="120" y="30" width="12" height="18" fill="#6B4423"/>
      <rect x="150" y="30" width="12" height="6" fill="#A0672F"/>
      <rect x="150" y="36" width="18" height="6" fill="#D9B285"/>
      <rect x="162" y="30" width="6" height="6" fill="#2E1F14"/> <!-- 코 -->
      
      <!-- 눈 애니메이션 (졸릴 때 감기) -->
      <g>
        <animate attributeName="opacity" values="1;0;0;1;1" keyTimes="0; 0.1; 0.85; 0.9; 1" dur="5s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="138" y="30" width="6" height="6" fill="#2E1F14"/> <!-- 뜬 눈 -->
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0; 0.1; 0.85; 0.9; 1" dur="5s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="138" y="34" width="6" height="2" fill="#2E1F14"/> <!-- 감은 눈 -->
      </g>
    </g>

  </g>

</g>