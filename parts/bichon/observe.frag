<g transform="translate(-352,8)">

  <!-- 앉아서 날아다니는 나비를 구경하는 비숑 (observe) / 투명 배경 / SMIL 전용 -->
  <!-- 6px 격자 기반: 모든 rect 좌표와 크기는 6의 배수, 발바닥 y=66 기준으로 그림 -->
  <!-- 나비는 0.2초로 날갯짓하며 4초 동안 코앞을 맴돌고, 비숑은 고개를 들었다 내렸다 따라 봄 -->
  <!-- 팔레트: 화이트 #F7F1E8 / 음영 #DCCFBC / 비스킷 귀 #E8D2AE / 눈코 #2B211D / 혀 #E8899A / 볼터치 #F4B9B2 -->

  <g transform="translate(340, 42)">
    <ellipse cx="63" cy="70" rx="51" ry="4" fill="#000000" opacity="0.12"/>
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="1.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="18" y="42" width="18" height="6" fill="#F7F1E8"/> <!-- 몽글몽글 말린 깃털 꼬리 -->
      <rect x="12" y="48" width="24" height="6" fill="#F7F1E8"/>
      <rect x="18" y="54" width="12" height="6" fill="#DCCFBC"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="1.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="18" y="36" width="18" height="6" fill="#F7F1E8"/> <!-- 몽글몽글 말린 깃털 꼬리 -->
      <rect x="12" y="42" width="24" height="6" fill="#F7F1E8"/>
      <rect x="18" y="48" width="12" height="6" fill="#DCCFBC"/>
    </g>
    <rect x="36" y="30" width="30" height="6" fill="#F7F1E8"/> <!-- 앉은 엉덩이 윗선 -->
    <rect x="30" y="36" width="42" height="24" fill="#F7F1E8"/> <!-- 동그란 엉덩이 -->
    <rect x="30" y="60" width="42" height="6" fill="#DCCFBC"/> <!-- 바닥에 닿은 엉덩이 음영 -->
    <rect x="66" y="60" width="18" height="6" fill="#F7F1E8"/> <!-- 접은 뒷발 -->
    <rect x="60" y="18" width="30" height="42" fill="#F7F1E8"/> <!-- 꼿꼿이 세운 가슴 솜털 -->
    <rect x="60" y="54" width="6" height="6" fill="#DCCFBC"/> <!-- 허벅지 경계 -->
    <rect x="72" y="42" width="12" height="24" fill="#DCCFBC"/> <!-- 앞다리 (배경) -->
    <rect x="78" y="42" width="12" height="24" fill="#F7F1E8"/> <!-- 앞다리 (전경) -->
    <!-- 고개 들어 보기 -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="66" y="-18" width="24" height="6" fill="#F7F1E8"/> <!-- 정수리 솜뭉치 -->
      <rect x="60" y="-12" width="36" height="6" fill="#F7F1E8"/>
      <rect x="54" y="-6" width="48" height="24" fill="#F7F1E8"/> <!-- 동그란 솜사탕 두상 -->
      <rect x="54" y="0" width="6" height="18" fill="#DCCFBC"/> <!-- 뒤통수 음영 (몸통과 구분) -->
      <rect x="60" y="18" width="36" height="6" fill="#DCCFBC"/> <!-- 턱 아래 솜털 음영 -->
      <rect x="102" y="-6" width="12" height="12" fill="#F7F1E8"/> <!-- 짧고 보송한 주둥이 -->
      <rect x="102" y="6" width="6" height="6" fill="#F7F1E8"/> <!-- 수염 솜털 -->
      <rect x="108" y="-6" width="6" height="6" fill="#2B211D"/> <!-- 까만 코 -->
      <rect x="90" y="-6" width="6" height="6" fill="#2B211D"/> <!-- 동그란 눈 -->
      <rect x="90" y="12" width="6" height="6" fill="#F4B9B2"/> <!-- 볼터치 -->
      <rect x="60" y="0" width="12" height="18" fill="#E8D2AE"/> <!-- 솜털에 반쯤 묻힌 처진 귀 -->
      <rect x="66" y="18" width="6" height="6" fill="#E8D2AE"/>
    </g>
    <!-- 앞을 보기 -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="66" y="-18" width="24" height="6" fill="#F7F1E8"/> <!-- 정수리 솜뭉치 -->
      <rect x="60" y="-12" width="36" height="6" fill="#F7F1E8"/>
      <rect x="54" y="-6" width="48" height="24" fill="#F7F1E8"/> <!-- 동그란 솜사탕 두상 -->
      <rect x="54" y="0" width="6" height="18" fill="#DCCFBC"/> <!-- 뒤통수 음영 (몸통과 구분) -->
      <rect x="60" y="18" width="36" height="6" fill="#DCCFBC"/> <!-- 턱 아래 솜털 음영 -->
      <rect x="102" y="0" width="12" height="12" fill="#F7F1E8"/> <!-- 짧고 보송한 주둥이 -->
      <rect x="102" y="12" width="6" height="6" fill="#F7F1E8"/> <!-- 수염 솜털 -->
      <rect x="108" y="0" width="6" height="6" fill="#2B211D"/> <!-- 까만 코 -->
      <rect x="90" y="0" width="6" height="6" fill="#2B211D"/> <!-- 동그란 눈 -->
      <rect x="90" y="12" width="6" height="6" fill="#F4B9B2"/> <!-- 볼터치 -->
      <rect x="60" y="0" width="12" height="18" fill="#E8D2AE"/> <!-- 솜털에 반쯤 묻힌 처진 귀 -->
      <rect x="66" y="18" width="6" height="6" fill="#E8D2AE"/>
    </g>
    <!-- 맴도는 나비 -->
    <g transform="translate(126, -24)">
      <animateTransform attributeName="transform" type="translate" values="126 -24; 114 -30; 102 -36; 120 -30; 138 -12; 144 -18; 126 -24" keyTimes="0; 0.15; 0.3; 0.45; 0.65; 0.85; 1" dur="4s" repeatCount="indefinite"/>
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="6" y="6" width="6" height="12" fill="#2B211D"/> <!-- 나비 몸통 -->
        <rect x="0" y="0" width="6" height="6" fill="#F2B33D"/> <!-- 팔랑이는 날개 -->
        <rect x="12" y="0" width="6" height="6" fill="#F2B33D"/>
        <rect x="0" y="6" width="6" height="6" fill="#F7D27A"/>
        <rect x="12" y="6" width="6" height="6" fill="#F7D27A"/>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="0.2s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="6" y="6" width="6" height="12" fill="#2B211D"/> <!-- 나비 몸통 -->
        <rect x="0" y="12" width="6" height="6" fill="#F2B33D"/> <!-- 접은 날개 -->
        <rect x="12" y="12" width="6" height="6" fill="#F2B33D"/>
      </g>
    </g>
  </g>

</g>
