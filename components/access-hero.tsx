import Image from 'next/image'

export function AccessHero() {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src="/apple-icon.png"
        alt="Opus Labs"
        width={96}
        height={96}
        priority
        className="mb-8 h-16 w-16 object-contain mix-blend-screen md:h-20 md:w-20"
      />

      <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5">
        <span
          className="h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          aria-hidden="true"
        />
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Order Confirmed · Access Granted
        </span>
      </div>

      <h1 className="font-serif text-6xl font-light tracking-tight text-titanium text-balance md:text-8xl">
        You&apos;re in.
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
        Your Opus Labs AI Vault is ready for immediate deployment.
      </p>
    </header>
  )
}
