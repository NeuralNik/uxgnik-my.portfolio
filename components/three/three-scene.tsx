"use client"

import { Suspense, memo } from 'react'
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), {
  ssr: false,
  loading: () => null
})

const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.OrbitControls })), {
  ssr: false
})

const Environment = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Environment })), {
  ssr: false
})

const NeuralNetwork = dynamic(() => import('./neural-network-background').then(mod => ({ default: mod.NeuralNetwork })), {
  ssr: false
})

const SphericalElements = dynamic(() => import('./spherical-elements').then(mod => ({ default: mod.SphericalElements })), {
  ssr: false
})

interface ThreeSceneProps {
  enableControls?: boolean
  className?: string
}

export const ThreeScene = memo(function ThreeScene({ enableControls = false, className = "" }: ThreeSceneProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        frameloop="demand"
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
          
          <Environment preset="night" />
          
          <NeuralNetwork 
            nodeCount={120} 
            maxDistance={2.5} 
            speed={0.3} 
          />
          <SphericalElements count={6} />
          
          {enableControls && (
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.5}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
})

export const ThreeSceneLight = memo(function ThreeSceneLight({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: false,
          powerPreference: "low-power"
        }}
        frameloop="demand"
        performance={{ min: 0.2 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.6} />
          
          <NeuralNetwork 
            nodeCount={60} 
            maxDistance={2} 
            speed={0.2} 
          />
          <SphericalElements count={3} />
        </Suspense>
      </Canvas>
    </div>
  )
})