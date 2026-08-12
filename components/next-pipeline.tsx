export function NextPipeline() {
  return (
    <section aria-label="What's next" className="flex flex-col items-center">
      <div
        className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <h2 className="font-serif text-3xl font-light text-titanium text-balance md:text-4xl">
        What&apos;s Next in the Pipeline
      </h2>

      <div className="mt-10 w-full rounded-2xl border border-border bg-card p-8 backdrop-blur-xl transition-colors duration-500 hover:border-white/15 md:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          In Production
        </span>

        <h3 className="mt-6 font-serif text-2xl font-light text-titanium text-balance md:text-3xl">
          Vol. 02 · High Performance &amp; Deep Work
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
          500 AI prompts engineered for mental clarity, decision-making, habits, deep work, and
          personal execution.
        </p>

        <div className="mt-8 rounded-lg border border-champagne/20 bg-champagne/[0.04] px-5 py-4">
          <p className="text-xs leading-relaxed text-champagne-light text-pretty">
            <span className="font-semibold uppercase tracking-[0.15em]">Member Privilege Reserved</span>
            {' — '}
            Your 20% discount code{' '}
            <code className="rounded border border-champagne/25 bg-champagne/10 px-1.5 py-0.5 font-mono text-[11px] tracking-wider">
              OL-AIV1
            </code>{' '}
            is automatically locked in for when Vol. 02 drops.
          </p>
        </div>
      </div>
    </section>
  )
}
