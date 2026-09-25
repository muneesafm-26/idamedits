import Image from "next/image"

const categories = [
  {
    title: "Home Décor",
    description: "Vases, textiles, and accents that add warmth and character.",
    image: "/images/cat-decor.png",
    span: "md:col-span-2",
  },
  {
    title: "Kitchen",
    description: "Everyday pieces that make the heart of the home a joy to use.",
    image: "/images/cat-kitchen.png",
    span: "",
  },
  {
    title: "Furniture",
    description: "Timeless, comfortable foundations for every room.",
    image: "/images/cat-furniture.png",
    span: "",
  },
  {
    title: "Organization",
    description: "Calm, clutter-free systems for a home that breathes.",
    image: "/images/cat-organization.png",
    span: "",
  },
  {
    title: "Wall Art",
    description: "Prints and gallery ideas to bring your walls to life.",
    image: "/images/cat-wallart.png",
    span: "",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</p>
        <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-4xl">
          Ideas and finds, organized by the way you live.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 ${category.span}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.title} inspiration styled in warm neutral tones`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-5">
              <h3 className="font-serif text-xl text-background">{category.title}</h3>
              <p className="mt-1 text-sm text-background/80">{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
