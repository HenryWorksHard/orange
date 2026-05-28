import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1200px)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-line/80 bg-bg-2/85 px-3 py-2 shadow-[0_8px_40px_-12px_rgba(57,255,138,0.35)] backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-bg shadow-[0_0_18px_rgba(255,122,26,0.7)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <circle cx="12" cy="13" r="7" fill="#0a0d12" />
              <rect x="11" y="3" width="2" height="4" fill="#0a0d12" />
              <path d="M13 5 Q16 4 17 6" stroke="#0a0d12" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-xl tracking-[0.18em] text-orange glow-orange">
            ORANGE
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-[13px] font-medium text-fg/85 md:flex">
          <li><a href="#home" className="hover:text-neon transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-neon transition-colors">About</a></li>
          <li><a href="#tokenomics" className="hover:text-neon transition-colors">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-neon transition-colors">Roadmap</a></li>
        </ul>

        <a
          href="#buy"
          className="rounded-full bg-neon px-5 py-2 text-sm font-bold text-bg shadow-[0_0_18px_rgba(57,255,138,0.5)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Buy Now
        </a>
      </nav>
    </header>
  );
}
