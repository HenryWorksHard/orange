export default function DeskScene() {
  return (
    <svg
      viewBox="0 0 1000 620"
      className="relative z-10 h-auto w-full max-w-[1100px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orange at his desk"
    >
      <defs>
        <radialGradient id="bodyOG" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffb45e" />
          <stop offset="100%" stopColor="#e87a18" />
        </radialGradient>
      </defs>

      {/* floor */}
      <rect x="0" y="430" width="1000" height="190" fill="#e8d180" />
      <line x1="0" y1="430" x2="1000" y2="430" stroke="#0b0b0b" strokeWidth="3" />

      {/* rug */}
      <ellipse cx="500" cy="560" rx="380" ry="42" fill="#f39424" stroke="#0b0b0b" strokeWidth="3" />
      <ellipse cx="500" cy="560" rx="320" ry="30" fill="none" stroke="#0b0b0b" strokeWidth="2" strokeDasharray="6 8" />

      {/* desk top + legs */}
      <rect x="240" y="320" width="520" height="22" fill="#c98a3f" stroke="#0b0b0b" strokeWidth="3" />
      <rect x="260" y="342" width="14" height="180" fill="#a87024" stroke="#0b0b0b" strokeWidth="3" />
      <rect x="726" y="342" width="14" height="180" fill="#a87024" stroke="#0b0b0b" strokeWidth="3" />

      {/* monitor */}
      <g transform="translate(390 170)">
        <rect x="0" y="0" width="220" height="150" rx="10" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="3" />
        <rect x="10" y="10" width="200" height="130" rx="4" fill="#fff1d6" />
        <text x="110" y="62" textAnchor="middle" fontFamily="var(--font-fat)" fontSize="24" fill="#f39424" stroke="#0b0b0b" strokeWidth="1">
          BUY $ORANGE
        </text>
        <text x="110" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#0b0b0b">▲ +420.69%</text>
        <text x="110" y="118" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#6b6450">press ANY key to wagmi</text>
        <rect x="100" y="150" width="20" height="22" fill="#0b0b0b" />
        <rect x="70" y="170" width="80" height="6" rx="2" fill="#0b0b0b" />
      </g>

      {/* keyboard */}
      <rect x="380" y="346" width="240" height="22" rx="3" fill="#1d1d1d" stroke="#0b0b0b" strokeWidth="3" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={388 + i * 16} y="350" width="12" height="14" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="1" />
      ))}

      {/* mouse */}
      <ellipse cx="650" cy="356" rx="20" ry="10" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="3" />
      <line x1="650" y1="356" x2="650" y2="348" stroke="#0b0b0b" strokeWidth="2" />

      {/* can on desk */}
      <g transform="translate(280 300)">
        <rect x="0" y="0" width="22" height="44" rx="2" fill="#f39424" stroke="#0b0b0b" strokeWidth="2.5" />
        <rect x="0" y="14" width="22" height="14" fill="#0b0b0b" />
        <text x="11" y="25" textAnchor="middle" fontFamily="var(--font-fat)" fontSize="9" fill="#fff1d6">GG</text>
        <ellipse cx="11" cy="-2" rx="9" ry="2" fill="#a86518" stroke="#0b0b0b" strokeWidth="1.5" />
      </g>

      {/* headphones */}
      <g transform="translate(700 308)">
        <path d="M0 22 Q22 -8 44 22" stroke="#0b0b0b" strokeWidth="3" fill="none" />
        <rect x="-4" y="20" width="10" height="16" rx="3" fill="#f39424" stroke="#0b0b0b" strokeWidth="2" />
        <rect x="38" y="20" width="10" height="16" rx="3" fill="#f39424" stroke="#0b0b0b" strokeWidth="2" />
      </g>

      {/* chair */}
      <g>
        <rect x="430" y="248" width="140" height="170" rx="22" fill="#1d1d1d" stroke="#0b0b0b" strokeWidth="3" />
        <rect x="492" y="258" width="16" height="150" rx="6" fill="#f39424" stroke="#0b0b0b" strokeWidth="2" />
        <rect x="455" y="262" width="90" height="28" rx="10" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <rect x="412" y="412" width="176" height="34" rx="10" fill="#1d1d1d" stroke="#0b0b0b" strokeWidth="3" />
        <rect x="396" y="380" width="24" height="60" rx="6" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <rect x="580" y="380" width="24" height="60" rx="6" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <rect x="490" y="446" width="20" height="50" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <path d="M420 522 L500 496 L580 522" stroke="#0b0b0b" strokeWidth="3" fill="#1d1d1d" />
        <circle cx="420" cy="524" r="10" fill="#0b0b0b" />
        <circle cx="500" cy="528" r="10" fill="#0b0b0b" />
        <circle cx="580" cy="524" r="10" fill="#0b0b0b" />
      </g>

      {/* CHARACTER */}
      <g>
        {/* body / hoodie */}
        <path
          d="M430 415
             Q430 360 500 360
             Q570 360 570 415
             L575 442
             Q500 458 425 442 Z"
          fill="url(#bodyOG)"
          stroke="#0b0b0b"
          strokeWidth="3"
        />
        <line x1="485" y1="380" x2="483" y2="408" stroke="#0b0b0b" strokeWidth="2.5" />
        <line x1="515" y1="380" x2="517" y2="408" stroke="#0b0b0b" strokeWidth="2.5" />

        {/* arms holding controller */}
        <path d="M438 408 Q455 432 478 430" stroke="#0b0b0b" strokeWidth="3" fill="url(#bodyOG)" />
        <path d="M562 408 Q545 432 522 430" stroke="#0b0b0b" strokeWidth="3" fill="url(#bodyOG)" />
        <ellipse cx="478" cy="430" rx="10" ry="8" fill="#ffb45e" stroke="#0b0b0b" strokeWidth="2.5" />
        <ellipse cx="522" cy="430" rx="10" ry="8" fill="#ffb45e" stroke="#0b0b0b" strokeWidth="2.5" />

        {/* controller */}
        <rect x="478" y="424" width="44" height="14" rx="6" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <circle cx="487" cy="431" r="2.4" fill="#f39424" />
        <circle cx="513" cy="431" r="2.4" fill="#fff1d6" />

        {/* head (orange creature, matches logo) */}
        <g className="animate-float">
          {/* leaf */}
          <path d="M520 270 Q535 262 542 274 Q531 280 519 278 Z" fill="#3aa052" stroke="#0b0b0b" strokeWidth="2.5" />
          <line x1="520" y1="270" x2="514" y2="278" stroke="#0b0b0b" strokeWidth="2.5" strokeLinecap="round" />
          {/* ears */}
          <path d="M464 286 L470 252 L488 274 Z" fill="url(#bodyOG)" stroke="#0b0b0b" strokeWidth="3" strokeLinejoin="round" />
          <path d="M536 286 L530 252 L512 274 Z" fill="url(#bodyOG)" stroke="#0b0b0b" strokeWidth="3" strokeLinejoin="round" />
          {/* head */}
          <ellipse cx="500" cy="320" rx="50" ry="46" fill="url(#bodyOG)" stroke="#0b0b0b" strokeWidth="3" />
          {/* face cream */}
          <ellipse cx="500" cy="328" rx="32" ry="30" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="2.5" />
          {/* eyes */}
          <ellipse cx="486" cy="322" rx="6.5" ry="8" fill="#0b0b0b" />
          <ellipse cx="514" cy="322" rx="6.5" ry="8" fill="#0b0b0b" />
          <circle cx="488.5" cy="319" r="2" fill="#fff" />
          <circle cx="516.5" cy="319" r="2" fill="#fff" />
          {/* mouth */}
          <path d="M488 342 Q500 352 512 342" stroke="#0b0b0b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M492 343.5 L492 346 L494 346 Z" fill="#fff" />
          <path d="M508 343.5 L508 346 L506 346 Z" fill="#fff" />
          {/* cheek dots */}
          <circle cx="474" cy="336" r="2.4" fill="#e87a18" opacity="0.7" />
          <circle cx="526" cy="336" r="2.4" fill="#e87a18" opacity="0.7" />
        </g>
      </g>

      {/* mess on floor: pizza box */}
      <g transform="translate(150 530)">
        <rect width="86" height="44" rx="3" fill="#f39424" stroke="#0b0b0b" strokeWidth="2.5" transform="skewX(-8)" />
        <rect x="6" y="6" width="74" height="32" rx="2" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="1.5" transform="skewX(-8)" />
        <circle cx="28" cy="22" r="3" fill="#d63333" transform="skewX(-8)" />
        <circle cx="46" cy="26" r="3" fill="#d63333" transform="skewX(-8)" />
        <circle cx="58" cy="18" r="3" fill="#3aa052" transform="skewX(-8)" />
      </g>

      {/* crushed can */}
      <g transform="translate(820 552)">
        <path d="M0 0 L36 -2 L40 14 L4 18 Z" fill="#f39424" stroke="#0b0b0b" strokeWidth="2.5" />
        <line x1="12" y1="2" x2="14" y2="16" stroke="#0b0b0b" strokeWidth="1.5" />
        <line x1="22" y1="0" x2="24" y2="16" stroke="#0b0b0b" strokeWidth="1.5" />
      </g>

      {/* upright can */}
      <g transform="translate(120 542)">
        <rect width="18" height="36" rx="2" fill="#0b0b0b" stroke="#0b0b0b" strokeWidth="2" />
        <rect y="10" width="18" height="10" fill="#f39424" />
        <text x="9" y="18" textAnchor="middle" fontFamily="var(--font-fat)" fontSize="6" fill="#0b0b0b">XP</text>
      </g>

      {/* crumpled papers */}
      <g transform="translate(770 558)">
        <circle cx="0" cy="0" r="10" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="2" />
        <path d="M-5 -3 L4 1 M-4 3 L5 -1" stroke="#0b0b0b" strokeWidth="1" />
      </g>
      <g transform="translate(750 572)">
        <circle cx="0" cy="0" r="7" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="2" />
      </g>

      {/* cable clutter */}
      <path d="M250 522 Q300 540 360 526 Q420 510 480 528" stroke="#0b0b0b" strokeWidth="2.5" fill="none" />
      <path d="M620 528 Q680 514 740 530" stroke="#0b0b0b" strokeWidth="2.5" fill="none" />
    </svg>
  );
}
