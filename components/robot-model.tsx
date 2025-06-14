"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function Robot(props: any) {
  const group = useRef<THREE.Group>(null!)
  // Use a placeholder model - in a real scenario, you'd use a custom robot model
  const { scene } = useGLTF("/assets/3d/duck.glb")

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t / 2) / 4 + t / 10
    group.current.position.y = Math.sin(t / 1.5) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive object={scene} scale={2} />
      </Float>
    </group>
  )
}

function RobotSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 2
    meshRef.current.rotation.y = Math.sin(t / 4) / 2
  })

  return (
    <mesh ref={meshRef} scale={[0.6, 0.6, 0.6]} position={[1.5, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color="#ff5500" attach="material" distort={0.4} speed={4} roughness={0.2} metalness={0.8} />
    </mesh>
  )
}

export function RobotModel() {
  return (
    <div className="h-full w-full rounded-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Robot position={[0, -1, 0]} />
        <RobotSphere />
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
