import React, { useRef } from 'react'
import * as THREE from 'three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { isMobile } from 'react-device-detect'

const Kiwi = () => {
  const kiwiRef = useRef<THREE.Mesh>()
  const kiwi = useGLTF('./low_poly_kiwi_run/scene.gltf')
  const animations = useAnimations(kiwi.animations, kiwi.scene)
  const walk = animations.actions["Take 001"]

  useFrame(() => {
    walk?.play()
  })

  return (
    <primitive ref={kiwiRef} position={[0.25, isMobile ? - 1.3 : -0.9, 1.5]} rotation-y={-1.1} object={kiwi.scene} scale={5} />
  )
}

export default Kiwi

useGLTF.preload('./low_poly_kiwi_run/scene.gltf')