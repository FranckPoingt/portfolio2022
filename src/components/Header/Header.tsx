import React from 'react'
import { Header as MantineHeader, Group } from '@mantine/core'
import { useRouter } from 'next/router'
import NavLink from '@src/components/NavLink/NavLink'
import { isMobile } from 'react-device-detect'

const links = [
  { title: '🏠', href: '/' },
  { title: 'Projects', href: '/projects', color: '#5FAD48' },
  { title: 'Experiences', href: '/experience', color: '#0085CC' },
  { title: 'Contact', href: '/contact', color: '#F65895' }
]

const Header = () => {
  const { pathname } = useRouter()

  return (
    <MantineHeader height={isMobile ? 50 : 75} p={isMobile ? 'sm' : "xl"}>
      <Group spacing={isMobile ? 'sm' : "xl"}>
        {links.map((link) => (
          <NavLink
            href={link.href}
            key={link.title}
            color={link.color}
            active={pathname === link.href}
          >
            {link.title}
          </NavLink>
        ))}
      </Group>

    </MantineHeader>
  )
}

export default Header