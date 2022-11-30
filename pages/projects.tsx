import Reqct, { useRef, useState } from "react"
import { SelectedPick } from "@xata.io/client"
import { GetStaticProps, NextPage } from "next"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Box, Button, Group } from "@mantine/core"
import { isMobile } from "react-device-detect"
import Layout from "@src/Layout/Layout"
import { getXataClient, ProjectsRecord } from "@src/xata"
import Computer from "@src/3DComponents/Computer/Computer"
import Phone from "@src/3DComponents/Phone/Phone"
import ProjectCard from "@src/components/ProjectCard/ProjectCard"

interface Props {
  projects: Readonly<SelectedPick<ProjectsRecord, ["*"]>>[]
}

export const getStaticProps: GetStaticProps = async () => {
  const xata = getXataClient()
  const projects = await xata.db.projects.getAll()
  return {
    props: {
      projects
    },
  }
}

const Projects: NextPage<Props> = ({ projects }) => {

  const parallaxRef = useRef<IParallax>(null)
  const boxRef = useRef(null)

  const [iframe, setIframe] = useState(projects[0].url)

  const handleNextClick = (e, index) => {
    e.stopPropagation()
    // set iframe to the next project url
    setIframe(projects[index + 1].url)
    parallaxRef.current!.scrollTo(index + 1)
  }

  const handlePrevClick = (e, index) => {
    e.stopPropagation()
    // set iframe to the previous project url
    setIframe(projects[index - 1].url)
    parallaxRef.current!.scrollTo(index - 1)
  }

  const handleBackToTopClick = (e, index) => {
    e.stopPropagation()
    setIframe(projects[0].url)
    parallaxRef.current!.scrollTo(0)
  }

  return (
    <Layout>
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 2000,
          position: [2, 1.75, 4]
        }}
      >
        <Environment preset="city" />
        {isMobile ? <Phone iframe={iframe} /> : <Computer iframe={iframe} />}
      </Canvas>
      <Box ref={boxRef} id='hello'>
        <Parallax
          ref={parallaxRef}
          pages={projects.length}
          enabled={false}
          style={{
            top: isMobile ? 50 : 75,
            left: 0,
            paddingTop: isMobile ? '16px' : '50px',
            paddingLeft: isMobile ? '25px' : '100px'
          }}
          className="parallax"
        >
          {projects
            .sort((a, b) => a.display_order! - b.display_order!)
            .map((project, index, array) => (
              <ParallaxLayer key={project.id} offset={index} speed={0.5}>
                <Box id={project.name!}>
                  <ProjectCard project={project} onClick={() => setIframe(project.url)} />
                  <Group>
                    {index !== 0 && (
                      <Button
                        mt="sm"
                        variant="gradient"
                        onClick={(e) => handlePrevClick(e, index)}>
                        Previous Project
                      </Button>
                    )}
                    {index < array.length - 1 ? (
                      <Button
                        mt="sm"
                        variant="gradient"
                        onClick={(e) => handleNextClick(e, index)}>
                        Next Project
                      </Button>
                    )
                      : (
                        <Button
                          mt="sm"
                          variant="gradient"
                          onClick={(e) => handleBackToTopClick(e, index)}>
                          Back to Top
                        </Button>
                      )
                    }
                  </Group>
                </Box>
              </ParallaxLayer>
            ))}
        </Parallax>
      </Box>
    </Layout >
  )
}

export default Projects