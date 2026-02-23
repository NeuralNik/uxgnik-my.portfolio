import { Header } from "@/components/header-inkgames"
import { Hero } from "@/components/hero-inkgames"
import { TechTicker } from "@/components/tech-ticker"
import { Projects } from "@/components/projects-inkgames"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact-new"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="relative z-10">
        <Header />
        <Hero />
        <TechTicker />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </main>
  )
}
