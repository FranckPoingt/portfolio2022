import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Franck Portofio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Click for an amazing journey." />
        <meta property="og:url" content="https://franckpoingt.dev" />
        <meta property="og:site_name" content="Franck Poingt's Portfolio" />
        <meta property="og:type" content="Website" />
        <meta property="og:description" content="Click for an amazing journey." />
        <meta property="og:title" content="Franck Poingt's Portofio" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            primary: [
              "#99dbff",
              "#80d3ff",
              "#66caff",
              "#4dc1ff",
              "#00a6ff",
              "#0096e6",
              "#0085cc",
              "#0074b3",
              "#006499",
              "#004266"
            ]
          },
          primaryShade: 6,
          primaryColor: "primary",
          defaultRadius: "sm",
          fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
          activeStyles: {
            transform: "scale(0.95)"
          },
          other: {
            defaultBorderWidth: 1,
            buttonActiveStyle: "zoom"
          },
          defaultGradient: {
            deg: 22
          }
        }}
      >
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </>
  )
}
