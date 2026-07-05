<g transform="translate(0,42)">

  <!-- Walking pixel dachshund / transparent background / SMIL only -->
  <!-- palette: brown #A0672F, dark brown #6B4423, tan #D9B285, dark #2E1F14 -->
  <g>
    <!-- whole dog walks across the banner -->
    

    <!-- ground shadow -->
    <ellipse cx="84" cy="70" rx="82" ry="4" fill="#000000" opacity="0.12"/>

    <!-- upper body: bobs in step -->
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 2; 0 0" keyTimes="0;0.5;1" dur="0.6s"
        calcMode="discrete" repeatCount="indefinite"/>

      <!-- tail: two wag frames -->
      <g>
        <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1"
          dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="0"  y="12" width="6" height="6" fill="#A0672F"/>
        <rect x="6"  y="18" width="6" height="6" fill="#A0672F"/>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1"
          dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
        <rect x="0"  y="6"  width="6" height="6" fill="#A0672F"/>
        <rect x="6"  y="12" width="6" height="6" fill="#A0672F"/>
      </g>
      <!-- tail root (fixed) -->
      <rect x="12" y="24" width="6" height="6" fill="#A0672F"/>

      <!-- very long body -->
      <rect x="12" y="30" width="120" height="24" fill="#A0672F"/>
      <rect x="24" y="48" width="96"  height="6"  fill="#D9B285"/>

      <!-- head (raised, at the front) -->
      <rect x="120" y="12" width="30" height="24" fill="#A0672F"/>

      <!-- floppy ear hanging over the back of the head -->
      <rect x="120" y="18" width="12" height="18" fill="#6B4423"/>

      <!-- long snout -->
      <rect x="150" y="18" width="12" height="6" fill="#A0672F"/>
      <rect x="150" y="24" width="18" height="6" fill="#D9B285"/>
      <rect x="162" y="18" width="6"  height="6" fill="#2E1F14"/>

      <!-- eye -->
      <rect x="138" y="18" width="6" height="6" fill="#2E1F14"/>
    </g>

    <!-- stubby legs: frame A -->
    <g>
      <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1"
        dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="18"  y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="18"  y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="36"  y="54" width="12" height="6" fill="#6B4423"/>
      <rect x="102" y="54" width="12" height="6" fill="#6B4423"/>
      <rect x="120" y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="120" y="60" width="12" height="6" fill="#D9B285"/>
    </g>

    <!-- stubby legs: frame B -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1"
        dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>
      <rect x="18"  y="54" width="12" height="6" fill="#6B4423"/>
      <rect x="36"  y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="36"  y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="102" y="54" width="12" height="6" fill="#A0672F"/>
      <rect x="102" y="60" width="12" height="6" fill="#D9B285"/>
      <rect x="120" y="54" width="12" height="6" fill="#6B4423"/>
    </g>
  </g>

</g>