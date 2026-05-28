import DeskScene from "./DeskScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex w-full flex-col items-center px-4 pt-28 pb-10 sm:pt-32"
    >
      <div className="relative mx-auto w-full max-w-[1100px]">
        {/* huge ORANGE wordmark sits behind the scene */}
        <h1
          aria-hidden
          className="absolute inset-x-0 top-0 z-0 select-none text-center font-fat text-[clamp(80px,16vw,220px)] leading-[0.85] tracking-[0.02em] text-ink"
          style={{ textShadow: "6px 8px 0 rgba(0,0,0,0.18)" }}
        >
          ORANGE
        </h1>

        {/* $ORANGE sticker */}
        <span
          aria-hidden
          className="absolute right-2 top-[6%] z-30 inline-block rotate-[-3deg] rounded-md border-2 border-ink bg-orange px-3 py-1 font-fat text-2xl text-ink shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] sm:text-3xl md:right-12 md:top-[12%] md:text-5xl"
        >
          $ORANGE
        </span>

        {/* graffiti tags */}
        <span
          aria-hidden
          className="absolute left-2 top-[40%] z-30 rotate-[-8deg] font-tag text-3xl text-orange md:left-6 md:top-[45%] md:text-5xl"
          style={{ WebkitTextStroke: "2px #0b0b0b" }}
        >
          GG
        </span>
        <span
          aria-hidden
          className="absolute right-4 top-[48%] z-30 rotate-[6deg] font-tag text-3xl text-orange md:right-12 md:top-[52%] md:text-5xl"
          style={{ WebkitTextStroke: "2px #0b0b0b" }}
        >
          HODL
        </span>
        <span
          aria-hidden
          className="absolute left-8 bottom-[18%] z-30 rotate-[-4deg] font-tag text-xl text-ink md:text-3xl"
        >
          afk irl
        </span>

        {/* stars */}
        <svg aria-hidden className="absolute right-[12%] top-[6%] z-20 h-6 w-6 text-ink animate-flicker" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>
        <svg aria-hidden className="absolute left-[18%] top-[14%] z-20 h-4 w-4 text-ink animate-flicker [animation-delay:1.2s]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>

        {/* the scene */}
        <div className="relative z-10 mt-[max(60px,11vw)]">
          <DeskScene />
        </div>
      </div>

      {/* speech bubble */}
      <div className="relative z-20 mx-auto -mt-2 max-w-xl px-4">
        <div className="relative rounded-2xl border-2 border-ink bg-cream px-5 py-4 text-center font-mono text-sm text-ink shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
          <span className="font-fat text-orange">orange:</span> sup. type below and i&apos;ll yap back.
          <span className="ml-1 inline-block h-4 w-2 bg-ink align-middle animate-caret" />
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-ink bg-cream" />
        </div>
      </div>
    </section>
  );
}
