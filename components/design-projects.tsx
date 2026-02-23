"use client"

import { useState, useRef, useEffect } from "react"
import { ExternalLink, Calendar, Users, ArrowUpRight, Palette, Monitor, Smartphone, Globe } from "lucide-react"
import { ThreeSceneLight } from "./three/three-scene"

interface DesignProject {
  id: number
  title: string
  category: string
  description: string
  year: string
  client: string
  tags: string[]
  size: "small" | "medium" | "large"
  icon: any
  image?: string
  stats?: {
    label: string
    value: string
  }[]
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "E-Commerce Platform UI",
    category: "Web Design",
    description: "Complete redesign of a modern e-commerce platform with focus on user experience and conversion optimization.",
    year: "2024",
    client: "TechCorp",
    tags: ["UI/UX", "E-commerce", "Responsive"],
    size: "large",
    icon: Monitor,
    stats: [
      { label: "Conversion Rate", value: "+35%" },
      { label: "User Engagement", value: "+50%" }
    ]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Design",
    description: "Intuitive mobile banking experience with seamless transactions.",
    year: "2024",
    client: "FinanceFlow",
    tags: ["Mobile", "Fintech", "Security"],
    size: "small",
    icon: Smartphone
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand identity redesign including logo and guidelines.",
    year: "2023",
    client: "StartupX",
    tags: ["Branding", "Logo"],
    size: "small",
    icon: Palette
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Design",
    description: "Analytics dashboard for SaaS platform with real-time data visualization and interactive charts.",
    year: "2024",
    client: "DataViz Pro",
    tags: ["Dashboard", "Analytics", "Data Viz"],
    size: "medium",
    icon: Monitor,
    stats: [
      { label: "Data Points", value: "1M+" }
    ]
  },
  {
    id: 5,
    title: "Healthcare Portal",
    category: "Web Design",
    description: "Patient portal design focusing on accessibility.",
    year: "2023",
    client: "MedCare",
    tags: ["Healthcare", "Accessibility"],
    size: "small",
    icon: Globe
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "Mobile Design",
    description: "Complete mobile app design for food delivery service.",
    year: "2024",
    client: "QuickBite",
    tags: ["Mobile", "Food Tech"],
    size: "small",
    icon: Smartphone
  },
  {
    id: 7,
    title: "Fintech Dashboard",
    category: "Web Design",
    description: "Financial dashboard with advanced analytics.",
    year: "2024",
    client: "FinTech Pro",
    tags: ["Finance", "Dashboard"],
    size: "small",
    icon: Monitor
  }
]

export function DesignProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-1"
      case "medium":
        return "col-span-2 row-span-1"
      case "small":
        return "col-span-1 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <section
      ref={sectionRef}
      id="design-projects"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* 3D Background for this section - temporarily disabled */}
      {/* <ThreeSceneLight className="opacity-30" /> */}
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-foreground/2 to-foreground/1 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
            Design
            <span className="block text-muted-foreground italic">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of design projects showcasing user-centered solutions 
            across web, mobile, and brand experiences.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {designProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className={`${getGridClasses(project.size)} group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-full w-full rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-foreground/5">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-gradient-to-br from-foreground/5 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gradient-to-tr from-foreground/3 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-3 sm:p-4 md:p-5 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-foreground/5 backdrop-blur-md">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-muted-foreground truncate">{project.category}</div>
                          <div className="text-xs text-muted-foreground/70">{project.year}</div>
                        </div>
                      </div>
                      <button
                        className={`p-1.5 sm:p-2 rounded-full bg-foreground/5 backdrop-blur-md transition-all duration-300 flex-shrink-0 ${
                          hoveredProject === project.id 
                            ? "opacity-100 scale-110 rotate-45" 
                            : "opacity-70 scale-100 rotate-0"
                        }`}
                      >
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 min-h-0">
                      <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      {(project.size === "large" || project.size === "medium") && (
                        <p className="text-xs sm:text-sm text-muted-foreground/80 line-clamp-2 sm:line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    {/* Stats or Tags */}
                    <div className="mt-2">
                      {project.stats && project.size === "large" ? (
                        <div className="flex gap-3 sm:gap-4">
                          {project.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-sm sm:text-lg font-bold text-foreground">
                                {stat.value}
                              </div>
                              <div className="text-xs text-muted-foreground/70 line-clamp-1">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, project.size === "small" ? 2 : 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-foreground/10 text-foreground/80 backdrop-blur-sm truncate"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Client */}
                    <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 text-xs text-muted-foreground/60 min-h-0">
                      <Users className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-foreground/5 transition-opacity duration-500 ${
                      hoveredProject === project.id ? "opacity-30" : "opacity-0"
                    }`}
                  ></div>

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredProject === project.id 
                        ? "shadow-lg shadow-foreground/10 ring-1 ring-foreground/20" 
                        : ""
                    }`}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together on your next design project?
          </p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:scale-105"
          >
            <span>Let's Collaborate</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}