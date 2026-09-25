const principles = [
  {
    title: "Curated, not cluttered",
    body: "A carefully chosen edit of ideas and finds, so you spend less time searching and more time enjoying your home.",
  },
  {
    title: "Practical meets stylish",
    body: "Every idea balances everyday function with a calm, elevated aesthetic that works in real homes.",
  },
  {
    title: "One place to start",
    body: "A single destination for home inspiration and product recommendations you can actually use.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-4xl">
            A home and lifestyle brand built around ideas worth keeping.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Idam Edits gives people one place to discover practical and stylish ideas for their
            homes. From décor and kitchen finds to furniture, organization, and wall art, it&apos;s a
            growing collection of inspiration designed to make every corner feel intentional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
