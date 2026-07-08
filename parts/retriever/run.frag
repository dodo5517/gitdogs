<g transform="translate(0,50)">

  <!-- 화면을 가로지르며 질주하는 다크 카라멜 골든 리트리버 (Run / Gallop) -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 꼬리 완벽 연결 -->
  <!-- 귀의 펄럭임이 달리는 2프레임(0.36초) 주기에 100% 동기화됨 -->

  <g>
    <!-- 화면 왼쪽 밖에서 오른쪽 밖으로 질주하는 애니메이션 (5초) -->
    

    <!-- 지면 그림자 (공중에 뜰 때 그림자가 흐려짐) -->
    <ellipse cx="84" cy="70" rx="84" ry="4" fill="#000000" opacity="0.12">
      <animate attributeName="opacity" values="0.12; 0.04; 0.12" keyTimes="0; 0.5; 1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
    </ellipse>

    <!-- 몸통 그룹: 뛰는 보폭에 맞춰 공중으로 바운스 (0.36초 주기) -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 -6; 0 0" keyTimes="0; 0.5; 1" dur="0.36s"
        calcMode="discrete" repeatCount="indefinite"/>

      <!-- 프레임 A: 길게 뻗은 자세 (Stretch / 앞뒷다리가 최대로 벌어짐) -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
        
        <!-- 몸통 & 머리 & 꼬리 (베이스 골드) -->
        <g fill="#D48C3D">
          <rect x="120" y="12" width="18" height="6"/> <!-- 정수리 -->
          <rect x="120" y="18" width="24" height="6"/> <!-- 눈가 -->
          <rect x="144" y="18" width="12" height="6"/> <!-- 주둥이 윗부분 -->
          <rect x="120" y="24" width="18" height="6"/> <!-- 뺨/목 -->
          <rect x="42" y="24" width="78" height="6"/>  <!-- 평평하고 길어진 등 -->
          <rect x="36" y="30" width="84" height="12"/> <!-- 몸통 중앙 -->
          
          <!-- 꼬리 (직선으로 뻗음) -->
          <rect x="18" y="24" width="24" height="6"/> 
          <rect x="6" y="24" width="12" height="6"/>  
          
          <!-- 앞다리 (앞으로 길게 뻗음) -->
          <rect x="114" y="42" width="12" height="12"/>
          <rect x="126" y="48" width="12" height="12"/>
          <rect x="138" y="54" width="12" height="12"/>
          
          <!-- 뒷다리 (뒤로 길게 뻗음) -->
          <rect x="30" y="42" width="12" height="12"/>
          <rect x="18" y="48" width="12" height="12"/>
          <rect x="6" y="54" width="12" height="12"/>
        </g>

        <!-- 크림색 장식털 (가슴, 배, 꼬리) -->
        <g fill="#E8BB7D">
          <rect x="144" y="24" width="12" height="6"/> <!-- 아래턱 -->
          <rect x="120" y="30" width="18" height="6"/> <!-- 튀어나온 가슴섶 -->
          <rect x="120" y="36" width="12" height="6"/>
          <rect x="42" y="42" width="72" height="6"/>  <!-- 늘어난 배 -->
          
          <!-- 흩날리는 배 아래 프린지 -->
          <rect x="54" y="48" width="6" height="6"/>
          <rect x="66" y="48" width="6" height="6"/>
          <rect x="78" y="48" width="6" height="6"/>
          <rect x="90" y="48" width="6" height="6"/>
          
          <!-- 꼬리 깃털 -->
          <rect x="18" y="30" width="18" height="6"/>
        </g>

        <!-- 배경쪽 다리 & 달리는 프레임에 맞춰 일자로 뻗은 귀 (음영 골드) -->
        <g fill="#AA6323">
          <!-- 바람에 뒤로 일자로 뻗으며 펄럭이는 귀 (타이밍 100% 동기화) -->
          <rect x="108" y="18" width="12" height="12"/> <!-- 귀 베이스 -->
          <rect x="96" y="18" width="12" height="6"/>   <!-- 귀 끝부분 -->
          <rect x="90" y="12" width="6" height="6"/>    <!-- 위로 흩날리는 팁 -->

          <!-- 배경 앞다리 -->
          <rect x="102" y="42" width="12" height="12"/>
          <rect x="114" y="48" width="12" height="12"/>
          <rect x="126" y="54" width="12" height="6"/>
          <!-- 배경 뒷다리 -->
          <rect x="42" y="42" width="12" height="12"/>
          <rect x="30" y="48" width="12" height="12"/>
          <rect x="18" y="54" width="12" height="6"/>
          
          <rect x="18" y="36" width="12" height="6"/> <!-- 꼬리 깃털 그림자 -->
        </g>

        <!-- 이목구비 -->
        <g fill="#24150D">
          <rect x="132" y="18" width="6" height="6"/> <!-- 눈 -->
          <rect x="150" y="18" width="6" height="6"/> <!-- 코 -->
        </g>
        <rect x="150" y="24" width="6" height="6" fill="#E08796"/> <!-- 혀 -->
      </g>

      <!-- 프레임 B: 수축한 자세 (Contract / 네 발이 공중에 뜨고 등이 굽음) -->
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
        
        <!-- 몸통 & 머리 & 꼬리 (베이스 골드) -->
        <g fill="#D48C3D">
          <rect x="114" y="18" width="18" height="6"/> <!-- 고개를 살짝 숙임 -->
          <rect x="114" y="24" width="24" height="6"/>
          <rect x="138" y="24" width="12" height="6"/>
          <rect x="114" y="30" width="18" height="6"/>
          
          <rect x="48" y="18" width="66" height="6"/>  <!-- 활처럼 위로 굽은 등 -->
          <rect x="42" y="24" width="72" height="12"/> <!-- 수축한 몸통 -->
          <rect x="48" y="36" width="66" height="6"/>
          
          <!-- 꼬리 (살짝 위로 솟구침) -->
          <rect x="24" y="18" width="24" height="6"/> 
          <rect x="12" y="12" width="18" height="6"/> 
          
          <!-- 앞다리 (가슴 아래로 접어올림) -->
          <rect x="96" y="36" width="12" height="12"/>
          <rect x="84" y="48" width="12" height="12"/>
          
          <!-- 뒷다리 (배 아래로 깊숙이 당겨옴) -->
          <rect x="48" y="42" width="12" height="12"/>
          <rect x="60" y="54" width="12" height="6"/>
        </g>

        <!-- 크림색 장식털 (가슴, 배, 꼬리) -->
        <g fill="#E8BB7D">
          <rect x="138" y="30" width="12" height="6"/>
          <rect x="114" y="36" width="18" height="6"/>
          <rect x="54" y="42" width="48" height="6"/> <!-- 압축된 배털 -->
          
          <!-- 꼬리 깃털 -->
          <rect x="24" y="24" width="18" height="6"/> 
          <rect x="12" y="18" width="18" height="6"/>
        </g>

        <!-- 배경쪽 다리 & 관성으로 아래로 처지는 귀 (음영 골드) -->
        <g fill="#AA6323">
          <!-- 몸이 솟구치는 관성으로 깊게 처지는 귀 (타이밍 100% 동기화) -->
          <rect x="102" y="24" width="12" height="12"/> <!-- 귀 베이스 -->
          <rect x="96" y="30" width="6" height="12"/>   <!-- 귀 중간 -->
          <rect x="90" y="36" width="6" height="6"/>    <!-- 아래로 꺾인 팁 -->

          <!-- 배경 앞다리 접힘 -->
          <rect x="108" y="36" width="12" height="6"/>
          <rect x="96" y="42" width="12" height="12"/>
          <!-- 배경 뒷다리 접힘 -->
          <rect x="36" y="42" width="12" height="12"/>
          <rect x="48" y="54" width="12" height="6"/>
          
          <rect x="24" y="30" width="12" height="6"/> <!-- 꼬리 깃털 그림자 -->
        </g>

        <!-- 이목구비 -->
        <g fill="#24150D">
          <rect x="126" y="24" width="6" height="6"/> <!-- 눈 -->
          <rect x="144" y="24" width="6" height="6"/> <!-- 코 -->
        </g>
        <rect x="144" y="30" width="6" height="6" fill="#E08796"/> <!-- 혀 -->
      </g>
    </g>
  </g>

</g>