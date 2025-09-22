"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SimpleThreeScene = dynamic(() => import("./simple-three-scene").then(mod => ({ default: mod.SimpleThreeScene })), {
  ssr: false,
  loading: () => null
})

// CSS Fallback animation
function CSSNeuralNetwork() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated particles with CSS using theme colors */}
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Connection lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute bg-muted-foreground/10 animate-pulse"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${20 + Math.random() * 60}px`,
            height: '1px',
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/2 via-transparent to-muted-foreground/2 animate-pulse" />
    </div>
  )
}

export function AdaptiveThreeScene() {
  const [use3D, setUse3D] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      console.log('WebGL not supported, falling back to CSS animations')
      setUse3D(false)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return use3D ? <SimpleThreeScene /> : <CSSNeuralNetwork />
}