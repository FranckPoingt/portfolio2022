import React, { useRef } from 'react'
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { isMobile } from 'react-device-detect'
import { Controls } from '@src/3DExperiences/IndexExperience/IndexExperience'

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>()
  const earth = useGLTF('./earth/scene.gltf')
  const [, getKeys] = useKeyboardControls<Controls>()

  useFrame((state, delta) => {
    const { forward, back, left, right } = getKeys()

    if (forward) {
      earthRef.current!.rotation.x -= delta * 2
    }

    if (back) {
      earthRef.current!.rotation.x += delta * 2
    }

    if (left) {
      earthRef.current!.rotation.y -= delta * 3
    }

    if (right) {
      earthRef.current!.rotation.y += delta * 2
    }

    earthRef.current!.rotation.y += delta / 2.5
    earthRef.current!.rotation.x -= delta / 2.5
  })

  return (
    <primitive
      ref={earthRef}
      position={[0, isMobile ? -2.5 : -2, 1]}
      rotation={[-2.5, 2, 0]}
      object={earth.scene}
      scale={2}
    />
  )
}

export default Earth