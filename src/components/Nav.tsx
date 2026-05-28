import Link from "next/link";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-label="Orange">
      <defs>
        <radialGradient id="bodyG" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffb45e" />
          <stop offset="100%" stopColor="#e87a18" />
        </radialGradient>
      </defs>
      {/* leaf on top */}
      <path d="M40 8 Q49 4 53 11 Q46 14 41 13 Z" fill="#3aa052" stroke="#0b0b0b" strokeWidth="1.6" />
      <path d="M40 8 L36 14" stroke="#0b0b0b" strokeWidth="1.6" strokeLinecap="round" />
      {/* ears */}
      <path d="M14 22 L18 8 L26 18 Z" fill="url(#bodyG)" stroke="#0b0b0b" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M50 22 L46 8 L38 18 Z" fill="url(#bodyG)" stroke="#0b0b0b" strokeWidth="1.8" strokeLinejoin="round" />
      {/* head/body */}
      <ellipse cx="32" cy="38" rx="22" ry="20" fill="url(#bodyG)" stroke="#0b0b0b" strokeWidth="2" />
      {/* face (cream) */}
      <ellipse cx="32" cy="42" rx="14" ry="13" fill="#fff1d6" stroke="#0b0b0b" strokeWidth="1.6" />
      {/* eyes */}
      <ellipse cx="26" cy="38" rx="3.2" ry="3.8" fill="#0b0b0b" />
      <ellipse cx="38" cy="38" rx="3.2" ry="3.8" fill="#0b0b0b" />
      <circle cx="27.2" cy="36.6" r="1" fill="#fff" />
      <circle cx="39.2" cy="36.6" r="1" fill="#fff" />
      {/* mouth */}
      <path d="M28 46 Q32 50 36 46" fill="none" stroke="#0b0b0b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 47.2 L30 48.6 L31 48.6 Z M34 47.2 L34 48.6 L33 48.6 Z" fill="#fff" />
      {/* cheek dots */}
      <circle cx="22" cy="44" r="1.3" fill="#e87a18" opacity="0.65" />
      <circle cx="42" cy="44" r="1.3" fill="#e87a18" opacity="0.65" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1200px)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full bg-ink px-3 py-2 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.45)]">
        <Link href="/" className="flex items-center gap-2 pl-1">
          <Logo />
          <span className="font-fat text-2xl tracking-[0.02em] text-orange leading-none pt-1">
            ORANGE
          </span>
        </Link>

        <ul className="hidden items-center gap-10 text-[15px] text-white sm:flex">
          <li><a href="#home" className="hover:text-orange transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-orange transition-colors">About</a></li>
          <li><a href="#tokenomics" className="hover:text-orange transition-colors">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-orange transition-colors">Roadmap</a></li>
        </ul>

        <a
          href="#buy"
          className="font-fat rounded-full bg-orange px-6 py-2 text-[17px] text-ink leading-none pt-3 pb-2 shadow-[0_2px_0_0_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Buy Now
        </a>
      </nav>
    </header>
  );
}
