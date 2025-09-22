import { Header } from "@/components/header"
import { Hero } from "@/components/hero-new"
import { Projects } from "@/components/projects"
import { DesignProjects } from "@/components/design-projects"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact-new"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <DesignProjects />
      <Blog />
      <Contact />
    </main>
  )
}
