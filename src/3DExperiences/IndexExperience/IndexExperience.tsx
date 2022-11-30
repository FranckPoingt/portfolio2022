
import React, { useEffect, useMemo } from 'react'
import { Environment, Float, KeyboardControls, KeyboardControlsEntry, PresentationControls, Stars } from '@react-three/drei'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import { useThree } from '@react-three/fiber'
import FloatingIcons from '@src/3DComponents/FloatingIcons/FloatingIcons'
import Kiwi from '@src/3DComponents/Kiwi/Kiwi'
import Button from '@src/3DComponents/Button/Button'
import Earth from '@src/3DComponents/Earth/Earth'

export enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right'
}

const IndexExperience = () => {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'w', 'W'] },
    { name: Controls.back, keys: ['ArrowDown', 's', 'S'] },
    { name: Controls.left, keys: ['ArrowLeft', 'a', 'A'] },
    { name: Controls.right, keys: ['ArrowRight', 'd', 'D'] }
  ], [])

  const router = useRouter()

  const { gl } = useThree()

  useEffect(() => {
    return gl.dispose()
  }, [gl])


  return (
    <>
      <KeyboardControls map={map}>
        <Environment preset="sunset" />
        <color attach="background" args={['#161B22']} />
        <Stars depth={100} factor={4} />
        <FloatingIcons />
        <Float speed={0.6}>
          <Button
            position={isMobile ? [-0.85, -1, 0.5] : [-1.5, -0.5, 0.5]}
            color="#5FAD48"
            rotation-y={0.5}
            label="Projects"
            onClick={() => router.push('./projects')} />
          <Button
            position={[0, -0.5, 0]}
            color="#0085CC"
            label="Experiences"
            onClick={() => router.push('./experience')} />
          <Button
            position={isMobile ? [1.25, -1, -0.5] : [1.5, -0.5, 0]}
            rotation-y={-0.25}
            color="#F65895"
            label="Contact"
            onClick={() => router.push('./contact')} />
        </Float>
        <Kiwi />
        <Earth />
      </KeyboardControls>
    </>
  )
}

export default IndexExperience