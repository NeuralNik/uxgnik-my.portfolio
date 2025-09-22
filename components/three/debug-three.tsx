"use client"

import { useEffect, useState } from 'react'

export function DebugThree() {
  const [canvasSupported, setCanvasSupported] = useState(false)
  const [webglSupported, setWebglSupported] = useState(false)
  const [threeLoaded, setThreeLoaded] = useState(false)

  useEffect(() => {
    // Check canvas support
    const canvas = document.createElement('canvas')
    setCanvasSupported(!!canvas.getContext)

    // Check WebGL support
    try {
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebglSupported(!!gl)
    } catch (e) {
      setWebglSupported(false)
    }

    // Check Three.js loading
    import('three').then(() => {
      setThreeLoaded(true)
    }).catch(() => {
      setThreeLoaded(false)
    })
  }, [])

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50">
      <div>Canvas Support: {canvasSupported ? '✅' : '❌'}</div>
      <div>WebGL Support: {webglSupported ? '✅' : '❌'}</div>
      <div>Three.js Loaded: {threeLoaded ? '✅' : '❌'}</div>
    </div>
  )
}