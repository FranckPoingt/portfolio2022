import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { BoxProps, createPolymorphicComponent } from "@mantine/core";

const _StyledProjectCard = styled('div')(
  ({ theme }) => css`
    max-width: ${isMobile ? "80vw" : "30vw"};
    border-radius: ${theme.radius.md}px;
    `
)

export const StyledProjectCard = createPolymorphicComponent<'div', BoxProps>(_StyledProjectCard)

export const ProjectLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
  marginBottom: 0.5rem;
`
