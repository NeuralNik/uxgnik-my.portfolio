"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Portfolio Badge */}
        <div
          className={`inline-block mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] text-foreground/60 border border-foreground/20 rounded-full">
            PORTFOLIO 2024
          </span>
        </div>

        {/* Main Headline - Bold and Uppercase like inkgames */}
        <div
          className={`mb-12 transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none uppercase">
            <span className="block text-white">CRAFTING THE</span>
            <span className="block text-white">NEXT GENERATION</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
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

        {/* Skills Tags */}
        <div
          className={`flex items-center justify-center gap-4 flex-wrap transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'DESIGN', 'AI/ML'].map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-gray-600 rounded-full"
              style={{ animationDelay: `${1200 + index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-gray-500">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

      {/* Scroll Indicator */}
      <div
        className={`absolute top-24 sm:top-32 right-4 sm:right-6 md:right-12 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-[0.2em] rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-foreground/50 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Profile Image */}
        <div
          className={`transition-all duration-1500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto mb-8 sm:mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 border border-foreground/10">
              <Image
                src="/sagnik-photo.jpg"
                alt="Sagnik's Profile Photo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
            I'm Sagnik
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-foreground/40 to-foreground/40"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground/40 rounded-full animate-pulse"></div>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-foreground/40 to-foreground/40"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8 sm:mb-12 px-2 sm:px-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight italic leading-none text-balance transition-all duration-1500 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent block">
              creative
            </span>
            <span className="bg-gradient-to-r from-foreground/70 via-foreground/90 to-foreground bg-clip-text text-transparent block">
              developer
            </span>
          </h1>
          
          {/* Floating accent elements */}
          <div 
            className="absolute -top-6 sm:-top-8 -right-2 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 border border-foreground/30 rounded-full animate-bounce"
            style={{ animationDelay: '2s', animationDuration: '3s' }}
          ></div>
          <div 
            className="absolute bottom-2 sm:bottom-4 -left-4 sm:-left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground/40 rounded-full animate-pulse"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-8 sm:mb-10 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap px-4">
            <span className="text-xs text-muted-foreground tracking-[0.3em] font-light">DESIGNER</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span className="text-xs text-muted-foreground tracking-[0.3em] font-light">DEVELOPER</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span className="text-xs text-muted-foreground tracking-[0.3em] font-light">UNDERGRAD</span>
          </div>
        </div>

        {/* Enhanced Description */}
        <div
          className={`flex flex-col items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-3xl text-center space-y-4 sm:space-y-6 px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Passionate about crafting{" "}
              <span className="text-foreground font-medium">digital experiences</span>{" "}
              that bridge imagination and functionality.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 leading-relaxed font-light">
              Creating meaningful connections through{" "}
              <span className="text-foreground">thoughtful design</span> and{" "}
              <span className="text-foreground">clean code</span>, 
              specializing in modern web technologies and bringing creative visions to life.
            </p>
          </div>

          {/* Resume Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            <Button
              variant="outline"
              className="relative rounded-full px-10 py-3 border-foreground/20 hover:border-foreground/40 transition-all duration-500 group bg-transparent hover:scale-105 hover:shadow-xl backdrop-blur-sm"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1BoVtwvqrPiA335PnR76xTPJjz-UEutNO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="font-light tracking-wide">VIEW RESUME</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Counter */}
      {/* Contact Button */}
      <div
        className={`absolute bottom-20 sm:bottom-12 md:bottom-24 right-4 sm:right-6 md:right-12 transition-all duration-1500 delay-1400 ${
          isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-45"
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          <button
            onClick={() => {
              console.log("Let's Talk button clicked"); // Debug log
              const contactElement = document.getElementById("contact");
              console.log("Contact element found:", contactElement); // Debug log
              if (contactElement) {
                contactElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }
            }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            type="button"
          >
            <div className="text-center pointer-events-none">
              <div className="text-xs font-light text-foreground group-hover:text-foreground transition-colors duration-300 tracking-wide">
                LET'S
                <br />
                TALK
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
