function SectionHeading({
  tag,
  title,
  color = "neon",
}: {
  tag: string;
  title: string;
  color?: "neon" | "purple" | "orange";
}) {
  const tagColor = { neon: "text-neon", purple: "text-purple", orange: "text-orange" }[color];
  return (
    <div className="mb-10 text-center">
      <p className={`mb-2 font-mono text-xs uppercase tracking-[0.3em] ${tagColor}`}>{`// ${tag}`}</p>
      <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{title}</h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-5xl px-5 py-24">
      <SectionHeading tag="who is he" title="MEET ORANGE" color="orange" />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "permanently afk",
            body: "Born from a forgotten lunchbox in 2007. Never left his desk. Has 4,200 hours in CS and zero in the sun.",
            color: "border-neon/40",
          },
          {
            title: "talks back",
            body: "Type to him below. Soon he yaps with a voice. He has opinions about your bag, your sleep schedule, and your KDR.",
            color: "border-purple/40",
          },
          {
            title: "100% citrus, 0% utility",
            body: "Pure meme. The roadmap is vibes. The whitepaper is one image. The team is one fruit.",
            color: "border-orange/40",
          },
        ].map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border bg-panel/60 p-6 backdrop-blur ${c.color}`}
          >
            <h3 className="mb-2 font-display text-xl text-fg">{c.title}</h3>
            <p className="text-sm leading-relaxed text-mute">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Tokenomics() {
  const allocations = [
    { label: "liquidity", pct: 60, color: "bg-neon" },
    { label: "community", pct: 25, color: "bg-purple" },
    { label: "marketing", pct: 10, color: "bg-orange" },
    { label: "energy drinks", pct: 5, color: "bg-pink" },
  ];
  return (
    <section id="tokenomics" className="relative mx-auto w-full max-w-5xl px-5 py-24">
      <SectionHeading tag="the bag" title="TOKENOMICS" color="neon" />

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur">
          <dl className="space-y-3 font-mono text-sm">
            <Stat k="ticker" v="$ORANGE" />
            <Stat k="supply" v="1,000,000,000" />
            <Stat k="tax" v="0 / 0" />
            <Stat k="liquidity" v="locked forever" />
            <Stat k="contract" v="tba on launch" />
          </dl>
        </div>

        <div className="rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-mute">allocation</p>
          <div className="space-y-3">
            {allocations.map((a) => (
              <div key={a.label}>
                <div className="mb-1 flex items-baseline justify-between text-sm">
                  <span className="text-fg">{a.label}</span>
                  <span className="font-mono text-mute">{a.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-bg">
                  <div className={`h-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line/60 py-2 last:border-b-0">
      <dt className="text-mute">{k}</dt>
      <dd className="text-fg">{v}</dd>
    </div>
  );
}

export function Roadmap() {
  const phases = [
    { phase: "phase 1", title: "wake up", body: "deploy contract, drop landing, character can text.", done: true },
    { phase: "phase 2", title: "give him a voice", body: "voice replies wired in. orange screams when you ask dumb questions.", done: false },
    { phase: "phase 3", title: "let him out", body: "twitter, telegram, twitch. orange streams. orange shitposts.", done: false },
    { phase: "phase 4", title: "world domination", body: "$ORANGE on every chain. statue in times square. retire in adelaide.", done: false },
  ];
  return (
    <section id="roadmap" className="relative mx-auto w-full max-w-5xl px-5 py-24">
      <SectionHeading tag="what happens next" title="ROADMAP" color="purple" />
      <ol className="relative ml-3 space-y-6 border-l-2 border-dashed border-line pl-8">
        {phases.map((p) => (
          <li key={p.phase} className="relative">
            <span
              className={`absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full border-2 ${
                p.done
                  ? "border-neon bg-neon text-bg"
                  : "border-line bg-bg-2 text-mute"
              }`}
            >
              {p.done ? (
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="h-2 w-2 rounded-full bg-mute" />
              )}
            </span>
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-mute">{p.phase}</p>
            <h3 className="font-display text-2xl text-fg">{p.title}</h3>
            <p className="mt-1 max-w-xl text-sm text-mute">{p.body}</p>
          </li>
        ))}
      </ol>

      <div id="buy" className="mt-20 rounded-3xl border border-neon/40 bg-panel/60 p-8 text-center backdrop-blur">
        <h3 className="font-display text-3xl text-orange glow-orange">ready, player one?</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-mute">
          ape into $ORANGE. then come back here and tell him about it. he&apos;s lonely.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3 font-bold text-bg shadow-[0_0_22px_rgba(57,255,138,0.55)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Buy $ORANGE
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-10 pb-32 text-center text-xs text-mute">
      <p>© orange. not financial advice. he&apos;s just a guy.</p>
    </footer>
  );
}
