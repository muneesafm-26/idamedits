import Image from "next/image"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Curated ideas &amp; finds
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground text-balance md:text-6xl">
            Thoughtful ideas for a home you love coming back to.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Idam Edits is a home and lifestyle brand focused on curated ideas and finds for décor,
            kitchen, furniture, organization, and wall art — one place to discover practical and
            stylish inspiration for your space.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#categories"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore the edits
            </a>
            <a
              href="#follow"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Follow on Pinterest
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 shadow-sm">
            <Image
              src="/images/hero-living-room.png"
              alt="A serene living room styled in warm beige and cream tones"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
