import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CategoriesSection } from "@/components/categories-section"
import { FollowSection } from "@/components/follow-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <FollowSection />
      </main>
      <SiteFooter />
    </div>
  )
}
