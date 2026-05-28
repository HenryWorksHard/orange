"use client";

import { useState } from "react";

export default function ChatBar() {
  const [value, setValue] = useState("");
  const [muted, setMuted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setValue("");
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-4">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-[960px] items-center gap-2 rounded-full border-[3px] border-ink bg-cream px-2 py-2 shadow-[5px_5px_0_0_rgba(0,0,0,0.85)]"
      >
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute orange's voice" : "Mute orange's voice"}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors ${
            muted ? "bg-bg text-mute" : "bg-orange text-ink"
          }`}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M17 8l4 8M21 8l-4 8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="say something to orange…"
          className="flex-1 bg-transparent px-3 text-base text-ink placeholder:text-mute focus:outline-none"
        />

        <button
          type="button"
          aria-label="Hold to speak"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-bg text-ink hover:bg-orange/40"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
          </svg>
        </button>

        <button
          type="submit"
          disabled={!value.trim()}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-orange text-ink shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] transition-transform hover:scale-[1.04] active:scale-[0.96] disabled:opacity-50 disabled:hover:scale-100"
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
