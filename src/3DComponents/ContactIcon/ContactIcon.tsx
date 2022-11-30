import React from 'react'
import { RoundedBox, Svg } from '@react-three/drei'
import type { Vector3, GroupProps } from '@react-three/fiber'

type Props = GroupProps & {
  onClick: () => void
  svgSrc: string
  svgScale: number
  svgPosition: Vector3
  roundedBoxArgs: [width?: number | undefined, height?: number | undefined, depth?: number | undefined] | undefined
  roundedBoxRadius: number
  roundedBoxScale: number
  color: string
}

const ContactIcon = ({
  onClick,
  svgPosition,
  color,
  svgScale,
  svgSrc,
  roundedBoxArgs,
  roundedBoxRadius,
  roundedBoxScale,
  position,
  ref,
  ...rest
}: Props) => {

  const handlePointerEnter = () => {
    document.body.style.cursor = 'pointer';
  }

  const handlePointerLeave = () => {
    document.body.style.cursor = 'default'
  }

  return (
    <group
      position={position}
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={onClick} {...rest}>
      <RoundedBox args={roundedBoxArgs} scale={roundedBoxScale} radius={roundedBoxRadius}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <Svg scale={svgScale} position={svgPosition} src={svgSrc} />
    </group>
  )
}

export default ContactIcon