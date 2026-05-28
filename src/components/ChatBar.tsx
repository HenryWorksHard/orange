"use client";

import { useState } from "react";

export default function ChatBar() {
  const [value, setValue] = useState("");
  const [muted, setMuted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: will wire to /api/chat later
    setValue("");
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-4 sm:pb-6">
      <form
        onSubmit={onSubmit}
        className="pointer-events-auto flex w-[min(960px,96%)] items-center gap-2 rounded-full border border-line bg-bg-2/90 px-2 py-2 shadow-[0_-12px_40px_-12px_rgba(57,255,138,0.3)] backdrop-blur-md"
      >
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute orange's voice" : "Mute orange's voice"}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition-colors ${
            muted ? "bg-bg text-mute" : "bg-purple/15 text-purple hover:bg-purple/25"
          }`}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M17 8l4 8M21 8l-4 8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="say something to orange…"
          className="flex-1 bg-transparent px-3 text-base text-fg placeholder:text-mute focus:outline-none"
        />

        <button
          type="button"
          aria-label="Hold to speak"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-bg text-fg/80 hover:bg-panel"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
          </svg>
        </button>

        <button
          type="submit"
          disabled={!value.trim()}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-neon text-bg shadow-[0_0_18px_rgba(57,255,138,0.5)] transition-transform hover:scale-[1.04] active:scale-[0.96] disabled:opacity-40 disabled:hover:scale-100"
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M3 11l18-8-8 18-2-8-8-2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
