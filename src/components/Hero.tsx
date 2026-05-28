import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex w-full flex-col items-center px-4 pt-28 pb-10 sm:pt-32"
    >
      {/* hero illustration */}
      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="relative overflow-hidden rounded-3xl border-[3px] border-ink shadow-[8px_8px_0_0_rgba(0,0,0,0.85)]">
          <Image
            src="/background.png"
            alt="Orange's gamer desk setup"
            width={1448}
            height={1086}
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* speech bubble — sets up the chat affordance */}
      <div className="relative z-20 mx-auto mt-6 max-w-xl px-4">
        <div className="relative rounded-2xl border-[3px] border-ink bg-cream px-5 py-4 text-center font-mono text-sm text-ink shadow-[5px_5px_0_0_rgba(0,0,0,0.85)]">
          <span className="font-fat text-orange">orange:</span> sup. type below and i&apos;ll yap back.
          <span className="ml-1 inline-block h-4 w-2 bg-ink align-middle animate-caret" />
          <div className="absolute -top-[10px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l-[3px] border-t-[3px] border-ink bg-cream" />
        </div>
      </div>
    </section>
  );
}
