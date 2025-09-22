"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingCube() {
  const mesh = useRef<any>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff6b6b" wireframe />
    </mesh>
  )
}

export function TestThreeScene() {
  return (
    <div 
      className="fixed top-20 left-20 bg-red-500/20 border border-red-500"
      style={{ 
        width: '300px', 
        height: '300px',
        zIndex: 1000
      }}
    >
      <div className="absolute top-0 left-0 bg-red-500 text-white p-1 text-xs">
        3D Test Canvas
      </div>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ 
          background: 'rgba(255, 0, 0, 0.1)',
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}