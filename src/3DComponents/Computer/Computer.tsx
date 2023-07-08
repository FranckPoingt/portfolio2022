import React, { Suspense } from 'react'
import { ContactShadows, Float, Html, useGLTF } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';

type Props = {
  iframe?: string | null
}

const Computer = ({ iframe }: Props) => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <group position-x={0.4}>
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffc500"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]} />
          <primitive object={computer.scene} position-y={-1.2} scale={1.25}>
            {!iframe &&
            <Suspense fallback={null}>
              <EffectComposer autoClear>
                <Glitch />
              </EffectComposer>
            </Suspense>
            }
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              {iframe ? <iframe src={iframe} /> :
                <iframe
                  allow="fullscreen"
                  height="360"
                  src="https://giphy.com/embed/2KZ2v2vifTGTvGg1fu/video"
                  width="480" />
              }
            </Html>
          </primitive>
        </Float>
      </group>
      <ContactShadows position-y={-1} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

export default Computer

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")