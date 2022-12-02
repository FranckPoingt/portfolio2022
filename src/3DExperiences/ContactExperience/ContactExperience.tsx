import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { Center, Float } from '@react-three/drei'
import { Group } from 'three'
import { githubUrl, linkedinUrl } from '@src/helpers/constants'
import ContactIcon from '@src/3DComponents/ContactIcon/ContactIcon'

const ContactExperience = () => {
  const linkedin = useRef<Group>(null)
  const github = useRef<Group>(null)
  const email = useRef<Group>(null)

  const { push } = useRouter()

  return (
    <Center>
      <Float speed={1} floatIntensity={0.5}>
        <ContactIcon
          position={[0, -2, -2]}
          ref={github}
          onClick={() => window.location.href = githubUrl}
          svgSrc="./github.svg"
          svgScale={0.0045}
          svgPosition={[-0.58, 0.6, 0.2]}
          roundedBoxArgs={[1.5, 1.5, 0.1]}
          roundedBoxRadius={0.15}
          roundedBoxScale={1}
          color="#fff"
        />
        <ContactIcon
          position={[0.25, 1.1, 1.6]}
          ref={email}
          onClick={() => push('/contact/email')}
          svgSrc="./paper-plane.svg"
          svgScale={0.002}
          svgPosition={[-0.5, 0.52, 0.2]}
          roundedBoxArgs={[1.5, 1.5, 0.05]}
          roundedBoxRadius={0.15}
          roundedBoxScale={1}
          color="#5FAD48"
        />
        <ContactIcon
          position={[2.5, 0, 0]}
          ref={linkedin}
          color="#027AB5"
          onClick={() => window.location.href = linkedinUrl}
          svgSrc="./linkedin.svg"
          svgScale={0.002}
          svgPosition={[-0.5, 0.6, 0.2]}
          roundedBoxArgs={[1.5, 1.5, 0.2]}
          roundedBoxRadius={0.15}
          roundedBoxScale={1}
        />
      </Float>
    </Center>
  )
}

export default ContactExperience