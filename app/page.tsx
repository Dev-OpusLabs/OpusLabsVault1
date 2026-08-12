import { AccessHero } from '@/components/access-hero'
import { VaultCard } from '@/components/vault-card'
import { NextPipeline } from '@/components/next-pipeline'

export default function Page() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      {/* Subtle radial champagne glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <main className="relative mx-auto flex w-full max-w-2xl flex-col gap-16 px-6 pb-24 pt-20 md:gap-20 md:pt-28">
        <AccessHero />
        <VaultCard />
        <NextPipeline />
      </main>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 px-6 py-10 text-center">
          <p className="text-xs text-muted-foreground">
            Need assistance with your order? Reach out directly to{' '}
            <a
              href="mailto:opuslabs.support@gmail.com"
              className="text-titanium underline-offset-4 transition-colors hover:text-champagne-light hover:underline"
            >
              opuslabs.support@gmail.com
            </a>
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
            © 2026 Opus Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
