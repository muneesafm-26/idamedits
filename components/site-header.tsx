import Link from "next/link"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Explore", href: "#categories" },
  { label: "Pinterest", href: "#follow" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-foreground">Idam Edits</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Home &amp; Lifestyle
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://www.pinterest.com/idamedits/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Follow
        </a>
      </div>
    </header>
  )
}
