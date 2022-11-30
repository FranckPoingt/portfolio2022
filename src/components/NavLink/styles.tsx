import Link from "next/link";
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { NavLinkProps } from "./NavLink";
import { isMobile } from "react-device-detect";


export const StyledLink = styled(Link)<NavLinkProps>(({ theme, active, color }) => css`
  color: ${active ? color : theme.colors.gray[7]};
  text-decoration: none;
  font-size: ${isMobile ? '1rem' : '1.25rem'};

  &:hover {
    color: ${color};
    transform: scale(1.1);
  }
`)