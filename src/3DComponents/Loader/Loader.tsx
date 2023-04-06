import { Text } from "@mantine/core";
import { Html, useProgress } from "@react-three/drei";
import AstroLoader from "@src/components/AstroLoader/AstroLoader";
import React from "react";

interface Props {
	variant?: "astro" | "text";
}

const Loader = ({ variant }: Props) => {
	const { progress } = useProgress();
	return (
		<Html>
			{variant === "text" ? (
				<Text fw="bold">Loading {Math.round(progress)}%</Text>
			) : (
				<AstroLoader />
			)}
		</Html>
	);
};

export default Loader;
