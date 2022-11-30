import { Canvas } from '@react-three/fiber'
import IndexExperience from '@src/3DExperiences/IndexExperience/IndexExperience'

export default function Home() {
  return (
    <Canvas
      className='canvas'
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [0, 1.5, 8]
      }}
    >
      <IndexExperience />
    </Canvas>
  )
}
