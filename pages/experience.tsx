import React from 'react'
import { ExperienceRecord, getXataClient } from '@src/xata'
import { SelectedPick } from '@xata.io/client'
import { GetStaticProps, NextPage } from 'next/types'
import { Center } from '@mantine/core'
import Layout from '@src/Layout/Layout'
import ExperienceCard from '@src/components/ExperienceCard/ExperienceCard'
import { SparkIconList } from '@src/helpers/constants'

interface Props {
  experiences: Readonly<SelectedPick<ExperienceRecord, ["*"]>>[]
}

export const getStaticProps: GetStaticProps = async () => {
  const xata = getXataClient()
  const experiences = await xata.db.experience.getAll()

  return {
    props: {
      experiences
    },
  }
}

const Experience: NextPage<Props> = ({ experiences }) => {

  return (
    <Layout>
      <Center>
        <ExperienceCard experience={experiences[0]} iconList={SparkIconList} />
      </Center>
    </Layout>
  )
}

export default Experience