"use client"

import { useEffect, useState } from "react"

const techStacks = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "JAVASCRIPT", "NODE.JS", "PYTHON", 
  "DJANGO", "FLASK", "POSTGRESQL", "MONGODB", "REDIS", "DOCKER", 
  "AWS", "VERCEL", "FIGMA", "PHOTOSHOP", "TAILWIND CSS", "SASS",
  "THREE.JS", "FRAMER MOTION", "GSAP", "D3.JS", "WEBGL", "BLENDER",
  "GIT", "GITHUB", "LINUX", "NGINX", "ELASTICSEARCH", "FIREBASE",
  "STRIPE", "SOCKET.IO", "GRAPHQL", "REST API", "JWT", "OAUTH",
  "MACHINE LEARNING", "TENSORFLOW", "PYTORCH", "COMPUTER VISION",
  "UI/UX DESIGN", "RESPONSIVE DESIGN", "ACCESSIBILITY", "SEO",
  "AGILE", "SCRUM", "CI/CD", "TESTING", "JEST", "CYPRESS"
]

export function TechTicker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...techStacks, ...techStacks]

  return (
    <section className="relative w-full py-8 bg-black overflow-hidden border-y border-white/10">
      <div className="relative">
        {/* Moving ticker */}
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {duplicatedTechs.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="ticker-item inline-block px-8 py-2 text-lg font-medium text-white/70 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                {tech}
                <span className="mx-4 text-white/30">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .ticker-content {
          display: inline-block;
          animation: scroll-left 120s linear infinite;
          white-space: nowrap;
        }

        .ticker-item:hover {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          border-radius: 4px;
        }

        @keyframes scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Pause animation on hover */
        .ticker-wrapper:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}