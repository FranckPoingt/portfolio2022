import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import IndexExperience from "@src/3DExperiences/IndexExperience/IndexExperience";
import Loader from "@src/3DComponents/Loader/Loader";

export default function Home() {
	return (
		<Canvas
			className='canvas'
			camera={{
				fov: 45,
				near: 0.1,
				far: 2000,
				position: [0, 1.5, 8],
			}}
		>
			<Suspense fallback={<Loader variant="astro" />}>
				<IndexExperience />
			</Suspense>
		</Canvas>
	);
}
