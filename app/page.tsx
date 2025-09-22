import { Header } from "@/components/header"
import { Hero } from "@/components/hero-new"
import { Projects } from "@/components/projects"
import { DesignProjects } from "@/components/design-projects"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact-new"
import dynamic from "next/dynamic"

// Dynamically import 3D components to avoid SSR issues
const AdaptiveThreeScene = dynamic(() => import("@/components/three/adaptive-three-scene").then(mod => ({ default: mod.AdaptiveThreeScene })), {
  ssr: false,
  loading: () => null
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* 3D Background */}
      <AdaptiveThreeScene />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <DesignProjects />
        <Blog />
        <Contact />
      </div>
    </main>
  )
}
