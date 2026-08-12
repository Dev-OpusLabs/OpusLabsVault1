const VAULT_URL =
  'https://level-viscount-e29.notion.site/Opus-Labs-AI-Vault-Business-Growth-Vol-1-89cabed480b383df9a8181c409299420?pvs=73'

export function VaultCard() {
  return (
    <section
      aria-label="Your purchase"
      className="group relative rounded-2xl border border-champagne/20 bg-card p-8 backdrop-blur-xl transition-all duration-500 hover:border-champagne/35 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.25)] md:p-12"
    >
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center text-center">
        <span className="mb-6 inline-block rounded-full border border-champagne/25 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-champagne-light">
          Vol. 01 · Official Release
        </span>

        <h2 className="font-serif text-4xl font-light text-titanium text-balance md:text-5xl">
          Business &amp; Growth Vault
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          500 Master AI Prompts · 10 Execution Systems
        </p>

        <a
          href={VAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-champagne px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-champagne-light hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:w-auto"
        >
          Open the Vault
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted-foreground text-pretty">
          Clicking above opens the system in Notion. Select &ldquo;Duplicate&rdquo; in the top-right
          corner to save the copy to your workspace.
        </p>
      </div>
    </section>
  )
}
