"use client"

import { useRef, useMemo, memo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
  connections: number[]
}

interface NeuralNetworkProps {
  nodeCount?: number
  maxDistance?: number
  speed?: number
}

export const NeuralNetwork = memo(function NeuralNetwork({ 
  nodeCount = 150, 
  maxDistance = 3, 
  speed = 0.5 
}: NeuralNetworkProps) {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const frameCount = useRef(0)
  
  // Generate nodes with random positions and velocities
  const nodes = useMemo(() => {
    const nodeArray: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodeArray.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed * 0.5
        ),
        connections: []
      })
    }
    return nodeArray
  }, [nodeCount, speed])

  // Create geometries
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(nodes.length * 3)
    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z
    })
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [nodes])

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry()
  }, [])

  // Animate nodes and connections
  useFrame((state, delta) => {
    frameCount.current++
    
    // Skip frames for better performance
    if (frameCount.current % 2 !== 0) return
    
    if (!pointsRef.current || !lineRef.current) return

    const connections: number[] = []
    const time = state.clock.elapsedTime

    // Update node positions
    nodes.forEach((node, i) => {
      // Add some floating motion
      node.position.x += node.velocity.x * delta
      node.position.y += node.velocity.y * delta
      node.position.z += node.velocity.z * delta

      // Add slight sine wave motion for organic feel
      node.position.y += Math.sin(time * 0.5 + i * 0.1) * 0.01
      node.position.x += Math.cos(time * 0.3 + i * 0.15) * 0.008

      // Boundary checks
      if (Math.abs(node.position.x) > 10) node.velocity.x *= -1
      if (Math.abs(node.position.y) > 10) node.velocity.y *= -1
      if (Math.abs(node.position.z) > 5) node.velocity.z *= -1

      // Update positions array
      if (pointsRef.current?.geometry.attributes.position) {
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
        positions[i * 3] = node.position.x
        positions[i * 3 + 1] = node.position.y
        positions[i * 3 + 2] = node.position.z
      }
    })

    // Update points geometry
    if (pointsRef.current?.geometry.attributes.position) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Find connections between nearby nodes (optimized)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < Math.min(i + 10, nodes.length); j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < maxDistance) {
          connections.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          )
        }
      }
    }

    // Update line geometry
    if (lineRef.current && connections.length > 0) {
      lineRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(connections, 3)
      )
      lineRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* Neural network nodes */}
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.05}
          color="#6366f1"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Neural network connections */}
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.2}
        />
      </lineSegments>
    </group>
  )
})