<g transform="translate(-46,50)">

  <!-- 고개 갸웃(head tilt): 앉아서 고개를 좌우로 갸웃 / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자, 오른쪽 응시 고정 -->
  <!-- 팔레트: #D48C3D 골드 / #AA6323 다크골드 / #E8BB7D 애프리콧 / #24150D 눈코 / #E08796 혀 -->
  <!-- 3s 주기: 똑바로(0~0.9s) → 갸웃(0.9~2.1s) → 똑바로(2.1~3s) -->

  <g transform="translate(40 0)">
    <!-- 지면 그림자 -->
    <ellipse cx="84" cy="70" rx="72" ry="4" fill="#000000" opacity="0.12"/>

    <!-- 앉은 엉덩이/뒷다리 -->
    <rect x="30" y="42" width="18" height="24" fill="#AA6323"/>
    <rect x="24" y="36" width="42" height="30" fill="#D48C3D"/>
    <rect x="24" y="60" width="48" height="6"  fill="#E8BB7D"/>

    <!-- 꼬리 살랑 -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.7s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="12" y="48" width="18" height="6" fill="#D48C3D"/>
      <rect x="6"  y="48" width="6"  height="6" fill="#E8BB7D"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.7s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="12" y="42" width="18" height="6" fill="#D48C3D"/>
      <rect x="6"  y="36" width="6"  height="6" fill="#E8BB7D"/>
    </g>

    <!-- 세운 상체 -->
    <g fill="#D48C3D">
      <rect x="54" y="18" width="30" height="6"/>
      <rect x="54" y="24" width="36" height="6"/>
      <rect x="54" y="30" width="42" height="6"/>
      <rect x="60" y="36" width="42" height="6"/>
      <rect x="66" y="42" width="42" height="18"/> <!-- 깊은 가슴 -->
    </g>
    <g fill="#E8BB7D">
      <rect x="72" y="48" width="30" height="12"/>
    </g>

    <!-- 목 + 앞가슴 앞면 (고정): 머리에서 가슴까지 잇는 두툼한 기둥 (휑함 제거) -->
    <g fill="#D48C3D">
      <rect x="84" y="18" width="24" height="6"/>  <!-- 목 뒤~어깨 -->
      <rect x="90" y="24" width="24" height="6"/>  <!-- 목 앞면 -->
      <rect x="96" y="30" width="24" height="6"/>  <!-- 앞가슴 상단(앞으로 불룩) -->
      <rect x="102" y="36" width="18" height="6"/> <!-- 앞가슴 -->
      <rect x="102" y="42" width="18" height="6"/> <!-- 앞가슴 아래 -->
    </g>
    <!-- 앞가슴 애프리콧 러프 -->
    <g fill="#E8BB7D">
      <rect x="108" y="30" width="12" height="6"/>
      <rect x="108" y="36" width="12" height="12"/>
      <rect x="108" y="48" width="12" height="6"/>
    </g>

    <!-- 바닥 딛는 앞발 둘 -->
    <rect x="84" y="54" width="12" height="12" fill="#D48C3D"/>
    <rect x="96" y="54" width="12" height="12" fill="#AA6323"/>
    <rect x="84" y="60" width="30" height="6"  fill="#E8BB7D"/>

    <!-- ===== 머리 그룹: 좌우로 갸웃 (rotate 2프레임) ===== -->
    <!-- 똑바로 프레임 -->
    <g>
      <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.3;0.31;0.7;0.71;1" dur="3s" calcMode="discrete" repeatCount="indefinite"/>
      <g fill="#D48C3D">
        <rect x="84" y="0"  width="30" height="6"/>
        <rect x="84" y="6"  width="30" height="6"/>
        <rect x="114" y="6" width="12" height="6"/>
        <rect x="84" y="12" width="24" height="6"/>
        <rect x="108" y="12" width="6" height="6"/> <!-- 뺨~턱 사이 빈칸 메움 -->
      </g>
      <rect x="114" y="12" width="12" height="6" fill="#E8BB7D"/>
      <g fill="#24150D">
        <rect x="102" y="6" width="6" height="6"/>
        <rect x="126" y="6" width="6" height="6"/>
      </g>
      <rect x="126" y="12" width="6" height="6" fill="#E08796"/>
      <rect x="84" y="6" width="12" height="18" fill="#AA6323"/>
    </g>
    <!-- 갸웃 프레임 (머리 전체를 살짝 기울임: 한쪽 귀 내려오고 반대쪽 올라감) -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.3;0.31;0.7;0.71;1" dur="3s" calcMode="discrete" repeatCount="indefinite"/>
      <g transform="rotate(14 105 12)">
        <g fill="#D48C3D">
          <rect x="84" y="0"  width="30" height="6"/>
          <rect x="84" y="6"  width="30" height="6"/>
          <rect x="114" y="6" width="12" height="6"/>
          <rect x="84" y="12" width="24" height="6"/>
          <rect x="108" y="12" width="6" height="6"/> <!-- 뺨~턱 사이 빈칸 메움 -->
        </g>
        <rect x="114" y="12" width="12" height="6" fill="#E8BB7D"/>
        <g fill="#24150D">
          <rect x="102" y="6" width="6" height="6"/>
          <rect x="126" y="6" width="6" height="6"/>
        </g>
        <rect x="126" y="12" width="6" height="6" fill="#E08796"/>
        <rect x="84" y="6" width="12" height="18" fill="#AA6323"/> <!-- 갸웃으로 더 처진 귀 -->
      </g>
    </g>
  </g>

</g>