import React from 'react'
import { AppShell, AppShellProps } from '@mantine/core'
import Header from '@src/components/Header/Header'
import Footer from '@src/components/Footer/Footer'

const Layout: React.FC<AppShellProps> = ({ children }) => {
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      styles={{ main: { paddingLeft: 0, paddingRight: 0 } }}
    >
      {children}
    </AppShell>
  )
}

export default Layout