"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "THREAT DETECTION SYSTEM",
    category: "AI · SECURITY",
    year: "2024",
    description: "State-of-the-art AI-powered threat detection system for real-time firearm identification using YOLOv8. Features 84.8% mAP50 accuracy with CPU optimization for edge deployment.",
    longDescription: "Advanced computer vision system built with YOLOv8 architecture for real-time threat detection in security environments. Optimized for edge deployment with efficient CPU processing.",
    technologies: ["Python", "YOLOv8", "OpenCV", "TensorRT"],
    github: "https://github.com/writetosagnik/threat-detection-system",
    featured: true
  },
  {
    id: 2,
    title: "LINKR",
    category: "WEB · UTILITY",
    year: "2024",
    description: "Modern QR code generator with React frontend and FastAPI backend. Supports multiple formats (PNG, JPG, PDF, SVG) with customizable colors and dark theme support.",
    longDescription: "Full-stack QR code generation platform with modern UI/UX and extensive customization options for professional use cases.",
    technologies: ["React", "FastAPI", "Python", "TailwindCSS"],
    github: "https://github.com/writetosagnik/linkr",
    featured: false
  },
  {
    id: 3,
    title: "CONTENTCRAFTER",
    category: "AI · SOCIAL MEDIA",
    year: "2024",
    description: "AI-powered social media content creation tool integrated with Google's Gemini AI. Features intelligent chatbot and multi-platform content generation capabilities.",
    longDescription: "Comprehensive content creation suite leveraging Google's Gemini AI for automated social media post generation across multiple platforms.",
    technologies: ["React", "TypeScript", "Gemini AI", "Node.js"],
    github: "https://github.com/writetosagnik/ContentCrafter",
    featured: true
  },
  {
    id: 4,
    title: "GENZCHATS",
    category: "MOBILE · AI",
    year: "2024",
    description: "Android chatbot app built with Kotlin and Gemini AI, designed as a relatable Gen Z college student providing academic and personal support to students.",
    longDescription: "Native Android application featuring conversational AI designed specifically for college students with Gen Z persona and academic assistance capabilities.",
    technologies: ["Kotlin", "Android SDK", "Gemini AI", "Material Design"],
    github: "https://github.com/writetosagnik/GenZChats",
    featured: false
  }
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] text-white/60 border border-white/20 rounded-full mb-8">
              SELECTED WORK
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-8 tracking-tight uppercase">
            DEFINING THE NEXT
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              GENERATION OF CODE
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects spanning AI, web development, and mobile applications.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-medium tracking-widest text-gray-500 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-gray-400 border border-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn border-white/20 text-white hover:border-white hover:bg-white/5"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      VIEW CODE
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">MORE PROJECTS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.id}
                className="group p-6 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-900/80"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium tracking-widest text-gray-500 mb-1 block">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-gray-500 border border-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
            onClick={() => {
              const contactElement = document.getElementById("contact")
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="flex items-center gap-2">
              WORK WITH ME
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}