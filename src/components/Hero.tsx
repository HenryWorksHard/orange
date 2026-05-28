import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-3">
      {/* Image area locked to the illustration's aspect ratio so % overlays line up with painted elements */}
      <div className="relative h-full aspect-[1448/1086] max-w-full">
        <Image
          src="/background.png"
          alt="Orange's gamer desk setup"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Speech bubble overlay — sits LEFT of the chair where the character will be */}
        <div
          className="absolute z-10"
          style={{ left: "8%", top: "32%", width: "44%", maxWidth: "440px" }}
        >
          <div className="relative rounded-2xl border-[3px] border-ink bg-cream px-5 py-4 text-left font-mono text-sm text-ink shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] sm:text-base">
            <span className="font-fat text-orange">orange:</span> sup. type below and i&apos;ll yap back.
            <span className="ml-1 inline-block h-4 w-2 bg-ink align-middle animate-caret" />

            {/* tail pointing right toward the chair */}
            <div
              aria-hidden
              className="absolute top-1/2 -right-[12px] h-5 w-5 -translate-y-1/2 rotate-45 border-r-[3px] border-t-[3px] border-ink bg-cream"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
