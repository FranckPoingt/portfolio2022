import { Container, Title } from "@mantine/core"
import Layout from "@src/Layout/Layout"
import ContactForm from "@src/components/ContactForm/ContactForm"

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

const EmailPage = () => {
  return (
    <Layout>
      <Container maw={500}>
        <Title order={1}>Contact me</Title>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default EmailPage