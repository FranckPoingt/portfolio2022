import React from 'react'
import { ContactShadows, Float, Html, useGLTF } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';

type Props = {
  iframe?: string | null
}

const Phone = ({ iframe }: Props) => {
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );
  return (
    <>
      <group position={[0.5, -0.75, 0.2]}>

        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffc500"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]} />
          <primitive object={phone.scene} position-y={-1.2} scale={0.75}>
            {!iframe &&
              <EffectComposer>
                <Glitch />
              </EffectComposer>
            }
            <Html
              transform
              wrapperClass="htmlPhoneScreen"
              distanceFactor={1.19}
              position={[0.14, 1.27, 0]}
              rotation-x={0}
              rotation-y={0}
            >
              {iframe ? <iframe src={iframe} /> :
                <iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/2KZ2v2vifTGTvGg1fu/video" width="480" />
              }
            </Html>
          </primitive>
        </Float>
      </group>
      <ContactShadows position-y={-1} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

export default Phone

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf")