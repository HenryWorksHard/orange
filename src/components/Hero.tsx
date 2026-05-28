import Image from "next/image";

const IMG_W = 1448;
const IMG_H = 1086;
const IMG_ASPECT = IMG_W / IMG_H;

export default function Hero() {
  return (
    <section
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ containerType: "size" }}
    >
      {/* Aspect-locked wrapper sized to COVER the viewport. Top-anchored so the
          painted ORANGE wordmark stays just below the nav. */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: `max(100cqw, calc(100cqh * ${IMG_ASPECT}))`,
          height: `max(100cqh, calc(100cqw / ${IMG_ASPECT}))`,
        }}
      >
        <Image
          src="/background.png"
          alt="Orange's gamer desk setup"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Speech bubble — LEFT of the painted chair, tail pointing right */}
        <div
          className="absolute z-10"
          style={{ left: "8%", top: "40%", width: "44%", maxWidth: "440px" }}
        >
          <div className="relative rounded-2xl border-[3px] border-ink bg-cream px-5 py-4 text-left font-mono text-sm text-ink shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] sm:text-base">
            <span className="font-fat text-orange">orange:</span> sup. type below and i&apos;ll yap back.
            <span className="ml-1 inline-block h-4 w-2 bg-ink align-middle animate-caret" />

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
