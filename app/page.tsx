import { Header } from "@/components/header-inkgames"
import { Hero } from "@/components/hero-inkgames"
import { Projects } from "@/components/projects-inkgames"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact-new"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </main>
  )
}
