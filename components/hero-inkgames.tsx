"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BoundedGridEffect from "@/components/ui/BoundedGridEffect"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Bounded Grid Effect */}
      <BoundedGridEffect
        gridRows={22}
        gridCols={32}
        trailLength={12}
        trailColor="224, 226, 219"
        fadeSpeed={180}
        width="95%"
        height="85%"
      />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Main Headline with Liquid Effect */}
        <div
          className={`mb-12 transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none uppercase relative">
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500"
              style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  #ffffff 0%, 
                  #f3f4f6 25%, 
                  #d1d5db 50%, 
                  #9ca3af 75%, 
                  #6b7280 100%)`,
                backgroundSize: '200% 200%',
                animation: 'liquidFlow 3s ease-in-out infinite',
                transition: 'background-position 0.3s ease-out'
              }}
            >
              CRAFTING THE
            </span>
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500"
              style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  #f3f4f6 0%, 
                  #d1d5db 25%, 
                  #9ca3af 50%, 
                  #6b7280 75%, 
                  #ffffff 100%)`,
                backgroundSize: '200% 200%',
                animation: 'liquidFlow 3s ease-in-out infinite 0.5s',
                transition: 'background-position 0.3s ease-out'
              }}
            >
              NEXT GENERATION
            </span>
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500"
              style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  #d1d5db 0%, 
                  #9ca3af 25%, 
                  #6b7280 50%, 
                  #ffffff 75%, 
                  #f3f4f6 100%)`,
                backgroundSize: '200% 200%',
                animation: 'liquidFlow 3s ease-in-out infinite 1s',
                transition: 'background-position 0.3s ease-out'
              }}
            >
              OF DIGITAL
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Sagnik Pal</span> — 
            a creative developer passionate about building innovative web experiences 
            that push the boundaries of what's possible.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
            onClick={() => {
              const projectsElement = document.getElementById("projects");
              if (projectsElement) {
                projectsElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE MY WORK
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <Button
            variant="outline"
            className="group border-2 border-white/20 text-white hover:border-white hover:bg-white/5 px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1BoVtwvqrPiA335PnR76xTPJjz-UEutNO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              VIEW RESUME
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}