import { RoundedBox, Text } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Button(props) {
  const buttonRef = useRef<THREE.Mesh>();
  const textRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    textRef.current?.position.set(buttonRef.current!.position.x, buttonRef.current!.position.y, buttonRef.current!.position.z + 0.1);
    textRef.current?.rotation.set(buttonRef.current!.rotation.x, buttonRef.current!.rotation.y, buttonRef.current!.rotation.z);
  }, []);

  const handleClick = () => {
    props.onClick();
  }

  const handlePointerEnter = () => {
    groupRef.current?.scale.set(1.05, 1.05, 1.05);
    document.body.style.cursor = 'pointer';
  }

  const handlePointerOut = () => {
    groupRef.current?.scale.set(1, 1, 1);
    document.body.style.cursor = 'default';
  }

  return (
    <group
      onClick={handleClick}
      ref={groupRef}
      onPointerEnter={handlePointerEnter}
      onPointerOut={handlePointerOut}
    >
      <RoundedBox ref={buttonRef} args={[1.25, 0.5, 0.1]} radius={0.05} smoothness={4} {...props}>
        <meshStandardMaterial color={props.color} />
      </RoundedBox>
      <Text font="./bangers-v20-latin-regular.woff"
        ref={textRef}
        fontSize={0.25}
        maxWidth={2}
        textAlign="center">
        {props.label}
      </Text>
    </group>
  );
}
