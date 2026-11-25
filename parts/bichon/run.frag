<g transform="translate(-18,44)">

  <!-- 화면을 가로지르며 신나게 질주하는 비숑 / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 발바닥 y=66 기준으로 그림 -->
  <!-- 0.36초 2프레임: 쭉 뻗기(공중) / 모으기(착지), 귀 펄럭임 동기화 -->
  <!-- 팔레트: 화이트 #F7F1E8 / 음영 #DCCFBC / 비스킷 귀 #E8D2AE / 눈코 #2B211D / 혀 #E8899A / 볼터치 #F4B9B2 -->

  <g transform="translate(0, 6)">
    <!-- 화면을 가로지르는 이동 (합성 시 제거됨) -->
    <g>
      
      <ellipse cx="84" cy="70" rx="66" ry="4" fill="#000000" opacity="0.12"><animate attributeName="opacity" values="0.04;0.12;0.04" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/></ellipse>
      <!-- 몸통 그룹: 보폭에 맞춰 공중으로 튀어오름 -->
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 -6; 0 0; 0 -6" keyTimes="0; 0.5; 1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
        <!-- 쭉 뻗은 다리 (공중) -->
        <g>
          <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="48" y="48" width="12" height="6" fill="#DCCFBC"/>
          <rect x="42" y="54" width="12" height="6" fill="#DCCFBC"/> <!-- 뒤로 뻗은 뒷다리 (배경) -->
          <rect x="108" y="48" width="12" height="6" fill="#DCCFBC"/>
          <rect x="114" y="54" width="12" height="6" fill="#DCCFBC"/> <!-- 앞으로 뻗은 앞다리 (배경) -->
          <rect x="36" y="48" width="12" height="6" fill="#F7F1E8"/>
          <rect x="30" y="54" width="12" height="6" fill="#F7F1E8"/> <!-- 뒤로 뻗은 뒷다리 (전경) -->
          <rect x="96" y="48" width="12" height="6" fill="#F7F1E8"/>
          <rect x="102" y="54" width="12" height="6" fill="#F7F1E8"/> <!-- 앞으로 뻗은 앞다리 (전경) -->
        </g>
        <!-- 모은 다리 (착지) -->
        <g opacity="0">
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="66" y="48" width="12" height="12" fill="#DCCFBC"/>
          <rect x="90" y="48" width="12" height="12" fill="#DCCFBC"/>
          <rect x="54" y="48" width="12" height="18" fill="#F7F1E8"/> <!-- 모은 뒷다리 -->
          <rect x="78" y="48" width="12" height="18" fill="#F7F1E8"/> <!-- 모은 앞다리 -->
        </g>
        <rect x="42" y="24" width="54" height="6" fill="#F7F1E8"/> <!-- 둥근 등선 -->
        <rect x="36" y="30" width="66" height="12" fill="#F7F1E8"/> <!-- 포동포동한 몸통 -->
        <rect x="42" y="42" width="54" height="6" fill="#DCCFBC"/> <!-- 배 아래 솜털 음영 -->
        <rect x="102" y="36" width="6" height="12" fill="#F7F1E8"/> <!-- 앞가슴 솜털 -->
        <rect x="24" y="18" width="18" height="6" fill="#F7F1E8"/> <!-- 바람에 날리는 꼬리 -->
        <rect x="18" y="24" width="24" height="6" fill="#F7F1E8"/>
        <rect x="24" y="30" width="12" height="6" fill="#DCCFBC"/>
        <rect x="102" y="-6" width="24" height="6" fill="#F7F1E8"/> <!-- 정수리 솜뭉치 -->
        <rect x="96" y="0" width="36" height="6" fill="#F7F1E8"/>
        <rect x="90" y="6" width="48" height="24" fill="#F7F1E8"/> <!-- 동그란 솜사탕 두상 -->
        <rect x="90" y="12" width="6" height="18" fill="#DCCFBC"/> <!-- 뒤통수 음영 (몸통과 구분) -->
        <rect x="96" y="30" width="36" height="6" fill="#DCCFBC"/> <!-- 턱 아래 솜털 음영 -->
        <rect x="138" y="12" width="12" height="12" fill="#F7F1E8"/> <!-- 짧고 보송한 주둥이 -->
        <rect x="138" y="24" width="6" height="6" fill="#F7F1E8"/> <!-- 수염 솜털 -->
        <rect x="144" y="12" width="6" height="6" fill="#2B211D"/> <!-- 까만 코 -->
        <rect x="126" y="12" width="6" height="6" fill="#2B211D"/> <!-- 동그란 눈 -->
        <rect x="126" y="24" width="6" height="6" fill="#F4B9B2"/> <!-- 볼터치 -->
        <rect x="138" y="24" width="6" height="6" fill="#E8899A"/> <!-- 내민 혀 -->
        <g>
          <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="90" y="6" width="18" height="6" fill="#E8D2AE"/> <!-- 뒤로 펄럭이는 귀 -->
          <rect x="84" y="12" width="12" height="6" fill="#E8D2AE"/>
        </g>
        <g opacity="0">
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.36s" calcMode="discrete" repeatCount="indefinite"/>
          <rect x="96" y="12" width="12" height="18" fill="#E8D2AE"/> <!-- 솜털에 반쯤 묻힌 처진 귀 -->
          <rect x="102" y="30" width="6" height="6" fill="#E8D2AE"/>
        </g>
      </g>
    </g>
  </g>

</g>
