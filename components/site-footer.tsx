export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg text-foreground">Idam Edits</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Home &amp; Lifestyle
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://www.pinterest.com/idamedits/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Pinterest
          </a>
          <span>&copy; {new Date().getFullYear()} Idam Edits</span>
        </div>
      </div>
    </footer>
  )
}
