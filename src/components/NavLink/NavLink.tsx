import React from 'react'
import { LinkProps } from 'next/link'
import { StyledLink } from './styles'

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  active: boolean
  color?: string
}

const NavLink: React.FC<NavLinkProps> = ({ children, active, color, href, ...rest }) => {
  return (
    <StyledLink href={href} active={active} color={color} {...rest}>
      {children}
    </StyledLink>
  )
}

export default NavLink