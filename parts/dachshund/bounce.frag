<g transform="translate(-100,-4)">

  <!-- 2. 제자리 잔뛰기 (Bounce with Anticipation & Spline) -->
  <!-- 색상: 브라운 #A0672F, 진갈색 #6B4423, 탠 #D9B285, 눈/코 #2E1F14 -->
  <g transform="translate(100, 46)">
    
    <!-- 그림자 (점프 시 살짝 수축) -->
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12">
      <animate attributeName="rx" 
        values="82; 82; 76; 82; 82; 76; 82; 82" 
        keyTimes="0; 0.2; 0.325; 0.45; 0.55; 0.675; 0.8; 1" 
        dur="2s" calcMode="spline" 
        keySplines="0 0 1 1; 0.1 0.8 0.3 1; 0.7 0 0.9 0.2; 0 0 1 1; 0.1 0.8 0.3 1; 0.7 0 0.9 0.2; 0 0 1 1" 
        repeatCount="indefinite"/>
    </ellipse>

    <!-- 몸통 전체 포물선 점프 애니메이션 (최대 높이 6px 잔뛰기) -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0; 0,0; 0,-6; 0,0; 0,0; 0,-6; 0,0; 0,0" 
        keyTimes="0; 0.2; 0.325; 0.45; 0.55; 0.675; 0.8; 1" 
        dur="2s" calcMode="spline" 
        keySplines="0 0 1 1; 0.1 0.8 0.3 1; 0.7 0 0.9 0.2; 0 0 1 1; 0.1 0.8 0.3 1; 0.7 0 0.9 0.2; 0 0 1 1" 
        repeatCount="indefinite"/>

      <!-- ========================================== -->
      <!-- 프레임 1: 평소 서 있는 자세 (착지 유지 구간) -->
      <!-- ========================================== -->
      <g>
        <animate attributeName="opacity" values="1;0;0;0;0;0;1;1" keyTimes="0; 0.1; 0.2; 0.45; 0.55; 0.8; 0.9; 1" dur="2s" calcMode="discrete" repeatCount="indefinite"/>
        
        <rect x="12" y="30" width="120" height="24" fill="#A0672F"/><rect x="24" y="48" width="96" height="6" fill="#D9B285"/>
        <rect x="120" y="12" width="30" height="24" fill="#A0672F"/><rect x="120" y="18" width="12" height="18" fill="#6B4423"/>
        <rect x="138" y="18" width="6" height="6" fill="#2E1F14"/><rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
        <rect x="150" y="24" width="18" height="6" fill="#D9B285"/><rect x="162" y="18" width="6" height="6" fill="#2E1F14"/>
        
        <rect x="18" y="54" width="12" height="6" fill="#A0672F"/><rect x="18" y="60" width="12" height="6" fill="#D9B285"/>
        <rect x="36" y="54" width="12" height="6" fill="#6B4423"/><rect x="102" y="54" width="12" height="6" fill="#6B4423"/>
        <rect x="120" y="54" width="12" height="6" fill="#A0672F"/><rect x="120" y="60" width="12" height="6" fill="#D9B285"/>
        
        <rect x="12" y="24" width="6" height="6" fill="#A0672F"/>
        <g><animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="12" width="6" height="6" fill="#A0672F"/><rect x="6" y="18" width="6" height="6" fill="#A0672F"/></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="6" width="6" height="6" fill="#A0672F"/><rect x="6" y="12" width="6" height="6" fill="#A0672F"/></g>
      </g>

      <!-- ========================================== -->
      <!-- 프레임 2: 스퀴시 (뛰기 직전 움츠림 & 착지 반동) -->
      <!-- 몸통이 전체적으로 6px 내려가고 귀도 떨어짐 -->
      <!-- ========================================== -->
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0;1;0;1;0;0" keyTimes="0; 0.1; 0.2; 0.45; 0.55; 0.8; 0.9; 1" dur="2s" calcMode="discrete" repeatCount="indefinite"/>
        
        <!-- 몸통 + 머리 (y축 +6px 이동) -->
        <g transform="translate(0, 6)">
          <rect x="12" y="30" width="120" height="24" fill="#A0672F"/><rect x="24" y="48" width="96" height="6" fill="#D9B285"/>
          <rect x="120" y="12" width="30" height="24" fill="#A0672F"/>
          <rect x="120" y="18" width="12" height="18" fill="#6B4423"/> <!-- 귀도 자연스레 내려감 -->
          <rect x="138" y="18" width="6" height="6" fill="#2E1F14"/><rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
          <rect x="150" y="24" width="18" height="6" fill="#D9B285"/><rect x="162" y="18" width="6" height="6" fill="#2E1F14"/>
          <rect x="12" y="24" width="6" height="6" fill="#A0672F"/>
          <!-- 꼬리 -->
          <g><animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="12" width="6" height="6" fill="#A0672F"/><rect x="6" y="18" width="6" height="6" fill="#A0672F"/></g>
          <g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="6" width="6" height="6" fill="#A0672F"/><rect x="6" y="12" width="6" height="6" fill="#A0672F"/></g>
        </g>
        
        <!-- 다리: 움츠릴 때는 발바닥만 바닥에 닿아 보임 -->
        <rect x="18" y="60" width="12" height="6" fill="#D9B285"/>
        <rect x="36" y="60" width="12" height="6" fill="#D9B285"/>
        <rect x="102" y="60" width="12" height="6" fill="#D9B285"/>
        <rect x="120" y="60" width="12" height="6" fill="#D9B285"/>
      </g>

      <!-- ========================================== -->
      <!-- 프레임 3: 공중 체공 (다리 접고, 귀 펄럭임) -->
      <!-- 위쪽의 animateTransform에 의해 하늘로 6px 날아오름 -->
      <!-- ========================================== -->
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;0;1;0;0;0" keyTimes="0; 0.1; 0.2; 0.45; 0.55; 0.8; 0.9; 1" dur="2s" calcMode="discrete" repeatCount="indefinite"/>
        
        <rect x="12" y="30" width="120" height="24" fill="#A0672F"/><rect x="24" y="48" width="96" height="6" fill="#D9B285"/>
        <rect x="120" y="12" width="30" height="24" fill="#A0672F"/>
        
        <!-- 반동으로 위로 휙 들린 귀 (y=6) -->
        <rect x="120" y="6" width="12" height="18" fill="#6B4423"/>
        
        <rect x="138" y="18" width="6" height="6" fill="#2E1F14"/><rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
        <rect x="150" y="24" width="18" height="6" fill="#D9B285"/><rect x="162" y="18" width="6" height="6" fill="#2E1F14"/>
        
        <!-- 몸통 쪽으로 바짝 접힌 다리 -->
        <rect x="36" y="54" width="12" height="6" fill="#6B4423"/><rect x="42" y="60" width="6" height="6" fill="#D9B285"/>
        <rect x="24" y="54" width="12" height="6" fill="#A0672F"/><rect x="30" y="60" width="6" height="6" fill="#D9B285"/>
        <rect x="102" y="54" width="12" height="6" fill="#6B4423"/><rect x="108" y="60" width="6" height="6" fill="#D9B285"/>
        <rect x="114" y="54" width="12" height="6" fill="#A0672F"/><rect x="120" y="60" width="6" height="6" fill="#D9B285"/>

        <rect x="12" y="24" width="6" height="6" fill="#A0672F"/>
        <g><animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="12" width="6" height="6" fill="#A0672F"/><rect x="6" y="18" width="6" height="6" fill="#A0672F"/></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/><rect x="0" y="6" width="6" height="6" fill="#A0672F"/><rect x="6" y="12" width="6" height="6" fill="#A0672F"/></g>
      </g>
    </g>
    
  </g>

</g>