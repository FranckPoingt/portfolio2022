import { NextPage } from "next"
import Layout from "@src/Layout/Layout"
import { Canvas } from "@react-three/fiber"
import ContactExperience from "@src/3DExperiences/ContactExperience/ContactExperience"

const Contact: NextPage = () => {

  return (
    <Layout>
      <Canvas className="canvas" style={{ height: 'calc(100vh - 225px)' }}>
        <ambientLight intensity={1} />
        <ContactExperience />
      </Canvas>
    </Layout>
  )
}

export default Contact