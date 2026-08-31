import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { CATEGORIES } from "@/constants/categories"
import Typography from "@/layout/typography"

// TODO: 각 카테고리별 페이지 구현 필요
export default function TopNav() {
  return (
    <StyledNav>
      {CATEGORIES.map(({ to, label }) => (
        <StyledNavLink key={to} to={to} activeClassName="active">
          {label}
        </StyledNavLink>
      ))}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  gap: 6px;
`

const StyledNavLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 999px;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  text-transform: capitalize;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  ${Typography.title2};

  &:hover,
  &.active {
    background: ${({ theme }) => theme.accentTintBg};
    color: ${({ theme }) => theme.accentTintText};
  }
`
