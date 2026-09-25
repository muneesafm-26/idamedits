export function FollowSection() {
  return (
    <section id="follow" className="border-t border-border/60 bg-primary/10">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Follow along</p>
        <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
          More home inspiration is on the way.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Idam Edits is just getting started. For now, the latest curated ideas and finds live on
          Pinterest — follow to be first to see what&apos;s next.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.pinterest.com/idamedits/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Visit Idam Edits on Pinterest
          </a>
        </div>
      </div>
    </section>
  )
}
