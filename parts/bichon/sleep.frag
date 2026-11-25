<g transform="translate(-370,50)">

  <!-- 솜뭉치처럼 동그랗게 말려 잠든 비숑 / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 발바닥 y=66 기준으로 그림 -->
  <!-- 3초 주기로 숨쉬며 등이 부풀고 Zzz가 떠오름 -->
  <!-- 팔레트: 화이트 #F7F1E8 / 음영 #DCCFBC / 비스킷 귀 #E8D2AE / 눈코 #2B211D / 혀 #E8899A / 볼터치 #F4B9B2 -->

  <g transform="translate(340, 0)">
    <ellipse cx="90" cy="70" rx="60" ry="4" fill="#000000" opacity="0.12"/>
    <rect x="36" y="36" width="12" height="6" fill="#F7F1E8"/> <!-- 몸에 붙인 꼬리 -->
    <rect x="30" y="42" width="18" height="12" fill="#F7F1E8"/>
    <rect x="30" y="54" width="12" height="6" fill="#DCCFBC"/>
    <rect x="48" y="36" width="54" height="6" fill="#F7F1E8"/> <!-- 동그랗게 만 등 -->
    <rect x="42" y="42" width="66" height="18" fill="#F7F1E8"/>
    <rect x="42" y="60" width="66" height="6" fill="#DCCFBC"/> <!-- 바닥 닿는 음영 -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="3s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="54" y="30" width="42" height="6" fill="#F7F1E8"/> <!-- 숨 들이쉴 때 부푸는 등 -->
    </g>
    <rect x="138" y="60" width="18" height="6" fill="#F7F1E8"/> <!-- 턱 밑에 괸 앞발 -->
    <rect x="102" y="24" width="24" height="6" fill="#F7F1E8"/> <!-- 정수리 솜뭉치 -->
    <rect x="96" y="30" width="36" height="6" fill="#F7F1E8"/>
    <rect x="90" y="36" width="48" height="24" fill="#F7F1E8"/> <!-- 동그란 솜사탕 두상 -->
    <rect x="90" y="42" width="6" height="18" fill="#DCCFBC"/> <!-- 뒤통수 음영 (몸통과 구분) -->
    <rect x="96" y="60" width="36" height="6" fill="#DCCFBC"/> <!-- 턱 아래 솜털 음영 -->
    <rect x="138" y="42" width="12" height="12" fill="#F7F1E8"/> <!-- 짧고 보송한 주둥이 -->
    <rect x="138" y="54" width="6" height="6" fill="#F7F1E8"/> <!-- 수염 솜털 -->
    <rect x="144" y="42" width="6" height="6" fill="#2B211D"/> <!-- 까만 코 -->
    <rect x="126" y="42" width="6" height="6" fill="#B9A68C"/> <!-- 감은 눈 -->
    <rect x="126" y="54" width="6" height="6" fill="#F4B9B2"/> <!-- 볼터치 -->
    <rect x="96" y="42" width="12" height="18" fill="#E8D2AE"/> <!-- 솜털에 반쯤 묻힌 처진 귀 -->
    <rect x="102" y="60" width="6" height="6" fill="#E8D2AE"/>
    <!-- 몽글몽글 떠오르는 Zzz -->
    <g transform="translate(144, 0)">
      <g transform="translate(0, 0)" opacity="0">
        <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.2;0.6;1" dur="3s" begin="0s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="0 0; -6 -24" dur="3s" begin="0s" repeatCount="indefinite"/>
        <rect x="6" y="0" width="12" height="6" fill="#8C7B68"/>
        <rect x="6" y="6" width="6" height="6" fill="#8C7B68"/>
        <rect x="0" y="12" width="12" height="6" fill="#8C7B68"/>
      </g>
      <g transform="translate(18, -12)" opacity="0">
        <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.2;0.6;1" dur="3s" begin="1s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="18 -12; 12 -36" dur="3s" begin="1s" repeatCount="indefinite"/>
        <rect x="6" y="0" width="12" height="6" fill="#8C7B68"/>
        <rect x="6" y="6" width="6" height="6" fill="#8C7B68"/>
        <rect x="0" y="12" width="12" height="6" fill="#8C7B68"/>
      </g>
      <g transform="translate(36, -24)" opacity="0">
        <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.2;0.6;1" dur="3s" begin="2s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="36 -24; 30 -48" dur="3s" begin="2s" repeatCount="indefinite"/>
        <rect x="6" y="0" width="18" height="6" fill="#8C7B68"/>
        <rect x="12" y="6" width="6" height="6" fill="#8C7B68"/>
        <rect x="6" y="12" width="6" height="6" fill="#8C7B68"/>
        <rect x="0" y="18" width="18" height="6" fill="#8C7B68"/>
      </g>
    </g>
  </g>

</g>
