import React from "react";
import { Float, Image, Svg, Text } from "@react-three/drei";
import { isMobile } from "react-device-detect";

const FloatingIcons = () => {
	return (
		<Float speed={0.3} position-y={isMobile ? 0 : -0.25}>
			<Text
				font="./bangers-v20-latin-regular.woff"
				fontSize={0.5}
				position={[0, 1.5, 0]}
				maxWidth={2}
				textAlign="center"
			>
				Franck Poingt
			</Text>
			<Text
				font="./bangers-v20-latin-regular.woff"
				fontSize={0.25}
				position={[0, 0.75, 0]}
				maxWidth={2}
				textAlign="center"
			>
				Fullstack Developer
			</Text>
			<Svg src="./storybook.svg" position={[-2, 3, -2]} scale={0.002} />
			<Svg src="./node.svg" position={[-0.5, 3.1, -1]} scale={0.0025} />
			<Svg
				src="./typescript.svg"
				position={isMobile ? [0, 0.1, -2] : [2.6, 3, -2]}
				scale={0.0025}
			/>
			<Svg
				src="./react.svg"
				position={[isMobile ? -1.5 : -2, 1, -0.1]}
				scale={0.0025}
			/>
			<Svg src="./postgres.svg" position={[-3.5, 1.9, -1.3]} scale={0.002} />
			<Svg src="./serverless.svg" position={[1.6, 1.5, -2]} scale={0.002} />
			<Svg src="./mantine.svg" position={[-1.2, 1.5, -0.5]} scale={0.002} />
			<Svg src="./mui.svg" position={[-2.5, 1.5, -3]} scale={0.002} />
			<Svg src="./html.svg" position={[2.8, 0.5, -2]} scale={0.00025} />
			<Svg src="./three.svg" position={[1, 0.5, -1]} scale={0.003} />
			<Svg
				src="./next.svg"
				position={[isMobile ? 0.8 : 1.2, 3, -1]}
				scale={0.0025}
			/>
			<Svg
				src="./nest.svg"
				position={[isMobile ? 0.8 : 2.2, 1.75, -1]}
				scale={0.03}
			/>
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image
				url="./emotion.png"
				transparent
				position={[1.3, 2.2, -1.7]}
				scale={0.4}
			/>
		</Float>
	);
};

export default FloatingIcons;
