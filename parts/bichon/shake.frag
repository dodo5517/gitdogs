<g transform="translate(-46,38)">

  <!-- 부르르 몸을 터는 비숑 / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 발바닥 y=66 기준으로 그림 -->
  <!-- 4초 주기: 1.2~2.3초 동안 좌우로 격하게 털고 솜털이 날림, 털 때는 눈을 질끈 -->
  <!-- 팔레트: 화이트 #F7F1E8 / 음영 #DCCFBC / 비스킷 귀 #E8D2AE / 눈코 #2B211D / 혀 #E8899A / 볼터치 #F4B9B2 -->

  <g transform="translate(40, 12)">
    <ellipse cx="84" cy="70" rx="66" ry="4" fill="#000000" opacity="0.12"/>
    <rect x="54" y="48" width="12" height="18" fill="#DCCFBC"/> <!-- 뒷다리 (배경) -->
    <rect x="96" y="48" width="12" height="18" fill="#DCCFBC"/> <!-- 앞다리 (배경) -->
    <rect x="42" y="48" width="12" height="18" fill="#F7F1E8"/> <!-- 뒷다리 (전경) -->
    <rect x="84" y="48" width="12" height="18" fill="#F7F1E8"/> <!-- 앞다리 (전경) -->
    <!-- 몸통+머리 부르르 -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; -4 0; 4 0; -4 0; 4 0; -4 0; 4 0; -4 0; 0 0; 0 0" keyTimes="0; 0.3; 0.34; 0.38; 0.42; 0.46; 0.5; 0.54; 0.58; 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="42" y="24" width="54" height="6" fill="#F7F1E8"/> <!-- 둥근 등선 -->
      <rect x="36" y="30" width="66" height="12" fill="#F7F1E8"/> <!-- 포동포동한 몸통 -->
      <rect x="42" y="42" width="54" height="6" fill="#DCCFBC"/> <!-- 배 아래 솜털 음영 -->
      <rect x="102" y="36" width="6" height="12" fill="#F7F1E8"/> <!-- 앞가슴 솜털 -->
      <rect x="30" y="6" width="18" height="6" fill="#F7F1E8"/> <!-- 몽글몽글 말린 깃털 꼬리 -->
      <rect x="24" y="12" width="24" height="6" fill="#F7F1E8"/>
      <rect x="30" y="18" width="12" height="6" fill="#DCCFBC"/>
      <rect x="42" y="18" width="6" height="6" fill="#F7F1E8"/>
      <rect x="102" y="-6" width="24" height="6" fill="#F7F1E8"/> <!-- 정수리 솜뭉치 -->
      <rect x="96" y="0" width="36" height="6" fill="#F7F1E8"/>
      <rect x="90" y="6" width="48" height="24" fill="#F7F1E8"/> <!-- 동그란 솜사탕 두상 -->
      <rect x="90" y="12" width="6" height="18" fill="#DCCFBC"/> <!-- 뒤통수 음영 (몸통과 구분) -->
      <rect x="96" y="30" width="36" height="6" fill="#DCCFBC"/> <!-- 턱 아래 솜털 음영 -->
      <rect x="138" y="12" width="12" height="12" fill="#F7F1E8"/> <!-- 짧고 보송한 주둥이 -->
      <rect x="138" y="24" width="6" height="6" fill="#F7F1E8"/> <!-- 수염 솜털 -->
      <rect x="144" y="12" width="6" height="6" fill="#2B211D"/> <!-- 까만 코 -->
      <rect x="126" y="24" width="6" height="6" fill="#F4B9B2"/> <!-- 볼터치 -->
      <!-- 평소 -->
      <g>
        <animate attributeName="opacity" values="1;0;1;1" keyTimes="0;0.3;0.58;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="126" y="12" width="6" height="6" fill="#2B211D"/>
        <rect x="96" y="12" width="12" height="18" fill="#E8D2AE"/> <!-- 솜털에 반쯤 묻힌 처진 귀 -->
        <rect x="102" y="30" width="6" height="6" fill="#E8D2AE"/>
      </g>
      <!-- 터는 중 -->
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.3;0.58;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="126" y="12" width="6" height="6" fill="#B9A68C"/>
        <rect x="90" y="6" width="18" height="6" fill="#E8D2AE"/> <!-- 뒤로 펄럭이는 귀 -->
        <rect x="84" y="12" width="12" height="6" fill="#E8D2AE"/>
      </g>
    </g>
    <g>
      <animate attributeName="opacity" values="1;0;0;1;1" keyTimes="0;0.34;0.46;0.62;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>

    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0;0;0" keyTimes="0;0.34;0.46;0.62;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="18" y="30" width="6" height="6" fill="#DCCFBC"/> <!-- 날리는 솜털 -->
      <rect x="150" y="0" width="6" height="6" fill="#DCCFBC"/>
      <rect x="66" y="12" width="6" height="6" fill="#DCCFBC"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.34;0.46;0.62;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="6" y="18" width="6" height="6" fill="#DCCFBC"/> <!-- 더 멀리 날리는 솜털 -->
      <rect x="162" y="-6" width="6" height="6" fill="#DCCFBC"/>
      <rect x="78" y="6" width="6" height="6" fill="#DCCFBC"/>
      <rect x="12" y="48" width="6" height="6" fill="#DCCFBC"/>
    </g>
  </g>

</g>
