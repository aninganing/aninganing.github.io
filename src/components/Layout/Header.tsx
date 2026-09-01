import React from "react"
import styled from "styled-components"
import breakpoints from "@/layout/breakpoints"

export default function Header() {
  return <StyledWordmark href="/">이렇게 삽질하다간 지구 끝까지 닿겠어</StyledWordmark>
}

const StyledWordmark = styled.a`
  max-width: 360px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.35;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
    max-width: 230px;
  }
`
