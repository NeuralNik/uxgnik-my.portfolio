"use client"

import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simple animated particles component for neural network
function NeuralNetworkParticles() {
  const points = useRef<THREE.Points>(null)
  const lines = useRef<THREE.LineSegments>(null)
  const particleCount = 150

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 25     // x
      pos[i + 1] = (Math.random() - 0.5) * 25 // y
      pos[i + 2] = (Math.random() - 0.5) * 12 // z
    }
    return pos
  }, [])

  useFrame((state) => {
    if (points.current && lines.current) {
      // Slow rotation for the entire network
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      lines.current.rotation.y = state.clock.elapsedTime * 0.05
      
      const positions = points.current.geometry.attributes.position.array as Float32Array
      const linePositions: number[] = []
      
      // Update particle positions with gentle floating
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.01
        positions[i] += Math.cos(state.clock.elapsedTime * 0.3 + i * 0.1) * 0.005
      }
      
      // Create connections between nearby particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < Math.min(i + 8, particleCount); j++) {
          const x1 = positions[i * 3]
          const y1 = positions[i * 3 + 1]
          const z1 = positions[i * 3 + 2]
          
          const x2 = positions[j * 3]
          const y2 = positions[j * 3 + 1]
          const z2 = positions[j * 3 + 2]
          
          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2)
          
          if (distance < 3) {
            linePositions.push(x1, y1, z1, x2, y2, z2)
          }
        }
      }
      
      points.current.geometry.attributes.position.needsUpdate = true
      
      // Update line connections
      if (linePositions.length > 0) {
        lines.current.geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        )
      }
    }
  })

  return (
    <group>
      {/* Particles */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="hsl(var(--foreground))"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Connection lines */}
      <lineSegments ref={lines}>
        <bufferGeometry />
        <lineBasicMaterial
          color="hsl(var(--muted-foreground))"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  )
}

export function SimpleThreeScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true
        }}
      >
        <Suspense fallback={null}>
          {/* Subtle lighting to match your theme */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.4} color="hsl(var(--foreground))" />
          
          {/* Neural Network */}
          <NeuralNetworkParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}