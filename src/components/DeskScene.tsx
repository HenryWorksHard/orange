export default function DeskScene() {
  return (
    <svg
      viewBox="0 0 1000 620"
      className="relative z-10 h-auto w-full max-w-[1100px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orange at his gamer desk"
    >
      <defs>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2230" />
          <stop offset="100%" stopColor="#0d1219" />
        </linearGradient>
        <linearGradient id="rug" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a259ff" />
          <stop offset="100%" stopColor="#5a2bb0" />
        </linearGradient>
        <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26303f" />
          <stop offset="100%" stopColor="#161c26" />
        </linearGradient>
        <linearGradient id="chair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b3243" />
          <stop offset="100%" stopColor="#16191f" />
        </linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c2a1c" />
          <stop offset="100%" stopColor="#08120c" />
        </linearGradient>
        <linearGradient id="orangeFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9a3c" />
          <stop offset="100%" stopColor="#ff6a00" />
        </linearGradient>
        <radialGradient id="monitorGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#39ff8a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#39ff8a" stopOpacity="0" />
        </radialGradient>
        <pattern id="brickLine" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 H80 M40 0 V20 M0 40 V20" stroke="#202736" strokeWidth="1" fill="none" />
        </pattern>
      </defs>

      {/* back wall */}
      <rect x="0" y="0" width="1000" height="430" fill="#11161e" />
      <rect x="0" y="0" width="1000" height="430" fill="url(#brickLine)" opacity="0.7" />

      {/* wall cracks */}
      <path d="M60 60 L90 140 L70 200 L110 280" stroke="#0a0d12" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M940 40 L920 110 L955 180 L930 260" stroke="#0a0d12" strokeWidth="2" fill="none" opacity="0.7" />

      {/* poster: "GG" */}
      <g transform="translate(80 70)">
        <rect width="150" height="100" rx="6" fill="#1c2330" stroke="#a259ff" strokeWidth="2" />
        <text x="75" y="68" textAnchor="middle" fontFamily="var(--font-display)" fontSize="56" fill="#a259ff">GG</text>
        <text x="75" y="90" textAnchor="middle" fontFamily="var(--font-tag)" fontSize="12" fill="#a259ff">no re</text>
      </g>

      {/* poster: pixel heart */}
      <g transform="translate(820 80)">
        <rect width="110" height="110" rx="6" fill="#1c2330" stroke="#ff3d8a" strokeWidth="2" />
        {[
          [2,1],[3,1],[5,1],[6,1],
          [1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],
          [1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
          [2,4],[3,4],[4,4],[5,4],[6,4],
          [3,5],[4,5],[5,5],
          [4,6],
        ].map(([x, y], i) => (
          <rect key={i} x={10 + x * 11} y={10 + y * 11} width="11" height="11" fill="#ff3d8a" />
        ))}
      </g>

      {/* LED strip on top */}
      <rect x="0" y="0" width="1000" height="4" fill="#a259ff" opacity="0.7">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
      </rect>

      {/* floor */}
      <rect x="0" y="430" width="1000" height="190" fill="url(#floor)" />
      <path d="M0 430 L1000 430" stroke="#2a3447" strokeWidth="2" />

      {/* rug */}
      <ellipse cx="500" cy="560" rx="380" ry="42" fill="url(#rug)" opacity="0.85" />
      <ellipse cx="500" cy="560" rx="320" ry="30" fill="none" stroke="#39ff8a" strokeWidth="2" strokeDasharray="6 8" opacity="0.6" />

      {/* desk back panel/legs */}
      <rect x="240" y="320" width="520" height="22" fill="url(#desk)" stroke="#0a0d12" strokeWidth="2" />
      <rect x="260" y="342" width="14" height="180" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
      <rect x="726" y="342" width="14" height="180" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />

      {/* monitor */}
      <g transform="translate(390 170)">
        <ellipse cx="110" cy="225" rx="60" ry="180" fill="url(#monitorGlow)" />
        <rect x="0" y="0" width="220" height="150" rx="8" fill="#0a0d12" stroke="#2a3447" strokeWidth="3" />
        <rect x="8" y="8" width="204" height="134" rx="3" fill="url(#screen)" />
        {/* scanlines on screen */}
        {Array.from({ length: 22 }).map((_, i) => (
          <rect key={i} x="8" y={8 + i * 6} width="204" height="2" fill="#000" opacity="0.15" />
        ))}
        <text x="110" y="62" textAnchor="middle" fontFamily="var(--font-display)" fontSize="22" fill="#39ff8a">
          BUY $ORANGE
        </text>
        <text x="110" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#39ff8a" opacity="0.85">
          ▲ +420.69%
        </text>
        <text x="110" y="118" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#39ff8a" opacity="0.55">
          press ANY key to wagmi
        </text>
        {/* monitor stand */}
        <rect x="100" y="150" width="20" height="22" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <rect x="70" y="170" width="80" height="6" rx="2" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
      </g>

      {/* keyboard */}
      <rect x="380" y="346" width="240" height="22" rx="3" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={388 + i * 16} y="350" width="12" height="14" fill="#0d1219" stroke="#39ff8a" strokeWidth="0.5" opacity="0.85" />
      ))}

      {/* mouse */}
      <ellipse cx="650" cy="356" rx="20" ry="10" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
      <line x1="650" y1="356" x2="650" y2="348" stroke="#39ff8a" strokeWidth="1.5" />

      {/* energy can on desk */}
      <g transform="translate(280 300)">
        <rect x="0" y="0" width="22" height="44" rx="2" fill="#a259ff" stroke="#0a0d12" strokeWidth="2" />
        <rect x="0" y="14" width="22" height="14" fill="#0a0d12" />
        <text x="11" y="25" textAnchor="middle" fontFamily="var(--font-display)" fontSize="9" fill="#39ff8a">GG</text>
        <ellipse cx="11" cy="-2" rx="9" ry="2" fill="#3d2a66" stroke="#0a0d12" strokeWidth="1.5" />
      </g>

      {/* headphones on desk */}
      <g transform="translate(700 308)">
        <path d="M0 22 Q22 -8 44 22" stroke="#0a0d12" strokeWidth="3" fill="none" />
        <rect x="-4" y="20" width="10" height="16" rx="3" fill="#ff7a1a" stroke="#0a0d12" strokeWidth="2" />
        <rect x="38" y="20" width="10" height="16" rx="3" fill="#ff7a1a" stroke="#0a0d12" strokeWidth="2" />
      </g>

      {/* gamer chair (behind character) */}
      <g>
        {/* backrest */}
        <rect x="430" y="248" width="140" height="170" rx="22" fill="url(#chair)" stroke="#0a0d12" strokeWidth="3" />
        {/* center stripe */}
        <rect x="492" y="258" width="16" height="150" rx="6" fill="#ff7a1a" opacity="0.85" stroke="#0a0d12" strokeWidth="2" />
        {/* headrest pillow */}
        <rect x="455" y="262" width="90" height="28" rx="10" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        {/* seat */}
        <rect x="412" y="412" width="176" height="34" rx="10" fill="#1d2532" stroke="#0a0d12" strokeWidth="3" />
        {/* armrests */}
        <rect x="396" y="380" width="24" height="60" rx="6" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <rect x="580" y="380" width="24" height="60" rx="6" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        {/* base */}
        <rect x="490" y="446" width="20" height="50" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <path d="M420 522 L500 496 L580 522" stroke="#0a0d12" strokeWidth="3" fill="#1a212c" />
        <circle cx="420" cy="524" r="10" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <circle cx="500" cy="528" r="10" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <circle cx="580" cy="524" r="10" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
      </g>

      {/* CHARACTER (placeholder Orange) sitting in chair */}
      <g className="origin-center" transform="translate(0 0)">
        {/* body / hoodie */}
        <path
          d="M430 415
             Q430 360 500 360
             Q570 360 570 415
             L575 442
             Q500 458 425 442 Z"
          fill="url(#orangeFur)"
          stroke="#0a0d12"
          strokeWidth="3"
        />
        {/* hoodie strings */}
        <line x1="485" y1="380" x2="483" y2="408" stroke="#0a0d12" strokeWidth="2" />
        <line x1="515" y1="380" x2="517" y2="408" stroke="#0a0d12" strokeWidth="2" />
        <circle cx="483" cy="410" r="3" fill="#0a0d12" />
        <circle cx="517" cy="410" r="3" fill="#0a0d12" />

        {/* arms holding controller */}
        <path d="M438 408 Q455 432 478 430" stroke="#0a0d12" strokeWidth="3" fill="url(#orangeFur)" />
        <path d="M562 408 Q545 432 522 430" stroke="#0a0d12" strokeWidth="3" fill="url(#orangeFur)" />
        <ellipse cx="478" cy="430" rx="10" ry="8" fill="#ff9a3c" stroke="#0a0d12" strokeWidth="2" />
        <ellipse cx="522" cy="430" rx="10" ry="8" fill="#ff9a3c" stroke="#0a0d12" strokeWidth="2" />

        {/* controller */}
        <rect x="478" y="424" width="44" height="14" rx="6" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
        <circle cx="487" cy="431" r="2.2" fill="#39ff8a" />
        <circle cx="513" cy="431" r="2.2" fill="#a259ff" />

        {/* head */}
        <g className="animate-float">
          <circle cx="500" cy="318" r="48" fill="url(#orangeFur)" stroke="#0a0d12" strokeWidth="3" />
          {/* leaf on top (orange fruit cue) */}
          <path d="M500 270 Q510 256 522 262 Q514 274 500 272 Z" fill="#39ff8a" stroke="#0a0d12" strokeWidth="2" />
          <line x1="500" y1="270" x2="500" y2="276" stroke="#0a0d12" strokeWidth="2" />
          {/* texture dimples */}
          <circle cx="478" cy="306" r="1.5" fill="#0a0d12" opacity="0.4" />
          <circle cx="522" cy="312" r="1.5" fill="#0a0d12" opacity="0.4" />
          <circle cx="495" cy="346" r="1.5" fill="#0a0d12" opacity="0.4" />
          <circle cx="510" cy="296" r="1.5" fill="#0a0d12" opacity="0.4" />

          {/* headset */}
          <path d="M462 300 Q500 256 538 300" stroke="#0a0d12" strokeWidth="5" fill="none" />
          <rect x="452" y="298" width="14" height="22" rx="4" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
          <rect x="534" y="298" width="14" height="22" rx="4" fill="#1a212c" stroke="#0a0d12" strokeWidth="2" />
          <circle cx="459" cy="309" r="3" fill="#39ff8a" />
          <circle cx="541" cy="309" r="3" fill="#39ff8a" />
          {/* mic */}
          <path d="M548 314 Q564 322 552 338" stroke="#0a0d12" strokeWidth="2.5" fill="none" />
          <circle cx="550" cy="338" r="3.5" fill="#ff3d8a" stroke="#0a0d12" strokeWidth="1.5" />

          {/* eyes (glowing) */}
          <g className="animate-glow">
            <ellipse cx="484" cy="322" rx="7" ry="8" fill="#0a0d12" />
            <ellipse cx="516" cy="322" rx="7" ry="8" fill="#0a0d12" />
            <circle cx="486" cy="320" r="2.4" fill="#39ff8a" />
            <circle cx="518" cy="320" r="2.4" fill="#39ff8a" />
          </g>

          {/* mouth - smirk */}
          <path d="M488 344 Q500 354 514 344" stroke="#0a0d12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* cheek blush */}
          <circle cx="472" cy="338" r="5" fill="#ff3d8a" opacity="0.35" />
          <circle cx="528" cy="338" r="5" fill="#ff3d8a" opacity="0.35" />
        </g>
      </g>

      {/* mess on floor: pizza box */}
      <g transform="translate(150 530)">
        <rect width="86" height="44" rx="3" fill="#ff7a1a" stroke="#0a0d12" strokeWidth="2" transform="skewX(-8)" />
        <rect x="6" y="6" width="74" height="32" rx="2" fill="#1a212c" transform="skewX(-8)" />
        <circle cx="28" cy="22" r="3" fill="#ff3d8a" transform="skewX(-8)" />
        <circle cx="46" cy="26" r="3" fill="#ff3d8a" transform="skewX(-8)" />
        <circle cx="58" cy="18" r="3" fill="#39ff8a" transform="skewX(-8)" />
      </g>

      {/* crushed can */}
      <g transform="translate(820 552)">
        <path d="M0 0 L36 -2 L40 14 L4 18 Z" fill="#39ff8a" stroke="#0a0d12" strokeWidth="2" />
        <line x1="12" y1="2" x2="14" y2="16" stroke="#0a0d12" strokeWidth="1.5" />
        <line x1="22" y1="0" x2="24" y2="16" stroke="#0a0d12" strokeWidth="1.5" />
      </g>

      {/* upright can */}
      <g transform="translate(120 542)">
        <rect width="18" height="36" rx="2" fill="#ff3d8a" stroke="#0a0d12" strokeWidth="2" />
        <rect y="10" width="18" height="10" fill="#0a0d12" />
        <text x="9" y="18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fill="#39ff8a">XP</text>
      </g>

      {/* crumpled papers */}
      <g transform="translate(770 558)">
        <circle cx="0" cy="0" r="10" fill="#e8ecf4" stroke="#0a0d12" strokeWidth="1.5" />
        <path d="M-5 -3 L4 1 M-4 3 L5 -1" stroke="#0a0d12" strokeWidth="1" />
      </g>
      <g transform="translate(750 572)">
        <circle cx="0" cy="0" r="7" fill="#e8ecf4" stroke="#0a0d12" strokeWidth="1.5" />
      </g>

      {/* cable clutter */}
      <path d="M250 522 Q300 540 360 526 Q420 510 480 528" stroke="#0a0d12" strokeWidth="2" fill="none" />
      <path d="M620 528 Q680 514 740 530" stroke="#0a0d12" strokeWidth="2" fill="none" />
    </svg>
  );
}
