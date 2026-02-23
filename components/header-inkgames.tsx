"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: 'WORK', id: 'projects' },
    { label: 'BLOG', id: 'blog' },
    { label: 'CONTACT', id: 'contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-6">
      <div className="max-w-4xl mx-auto">
        {/* Floating Navigation Island */}
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20" 
              : "bg-white/5 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />
          
          <div className="relative flex items-center justify-between px-6 py-4">
            
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg font-bold text-white hover:text-gray-300 transition-colors duration-300 tracking-wide z-10"
            >
              UXGNIK
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 tracking-wider relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 tracking-wide rounded-lg overflow-hidden group"
              >
                <span className="relative z-10">GET IN TOUCH</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Bottom glow effect */}
          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`} />
        </div>
      </div>
    </header>
  )
}