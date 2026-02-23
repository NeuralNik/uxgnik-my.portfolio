"use client"

import { useRef, useMemo, memo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingSphereProps {
  position: [number, number, number]
  size?: number
  color?: string
  speed?: number
  distort?: number
}

const FloatingSphere = memo(function FloatingSphere({ 
  position, 
  size = 1, 
  color = "#6366f1", 
  speed = 1,
  distort = 0.3
}: FloatingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const startTime = useMemo(() => Math.random() * Math.PI * 2, [])

  // Create geometry and material
  const geometry = useMemo(() => new THREE.SphereGeometry(size, 32, 32), [size])
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.4,
    metalness: 0.8,
    transparent: true,
    opacity: 0.8
  }), [color])

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.elapsedTime + startTime
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5
    meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.7) * 0.3
    
    // Rotation
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
    meshRef.current.rotation.z = time * 0.1
  })

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      geometry={geometry} 
      material={material}
    />
  )
})

interface SphericalElementsProps {
  count?: number
}

export const SphericalElements = memo(function SphericalElements({ count = 8 }: SphericalElementsProps) {
  const spheres = useMemo(() => {
    const sphereArray: {
      id: number
      position: [number, number, number]
      size: number
      color: string
      speed: number
      distort: number
    }[] = []
    for (let i = 0; i < count; i++) {
      sphereArray.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8
        ] as [number, number, number],
        size: 0.3 + Math.random() * 0.7,
        color: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)],
        speed: 0.5 + Math.random() * 0.8,
        distort: 0.2 + Math.random() * 0.4
      })
    }
    return sphereArray
  }, [count])

  return (
    <group>
      {spheres.map((sphere) => (
        <FloatingSphere
          key={sphere.id}
          position={sphere.position}
          size={sphere.size}
          color={sphere.color}
          speed={sphere.speed}
          distort={sphere.distort}
        />
      ))}
    </group>
  )
})