import { Center, Footer as MantineFooter, Stack, Text } from '@mantine/core'
import React from 'react'
import { isMobile } from 'react-device-detect'

const Footer = () => {
  return (
    <MantineFooter height={100} py={isMobile ? "xs" : "xl"}>
      <Center>
        <Stack align="center" spacing={0}>
          <Text>Made in a week with</Text>
          <Text sx={{ textAlign: 'center' }}>Next.js, Xata.io, React Three Fiber, Mantine, Typescript and ❤️</Text>
        </Stack>
      </Center>
    </MantineFooter>
  )
}

export default Footer