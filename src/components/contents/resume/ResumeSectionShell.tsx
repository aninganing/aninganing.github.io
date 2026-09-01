import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"

interface Props {
  id: string
  title: string
  children: React.ReactNode
}

export default function ResumeSectionShell({ id, title, children }: Props) {
  return (
    <StyledSection id={id}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  scroll-margin-top: var(--resume-header-offset, 96px);
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledTitle = styled.h2`
  margin: 0 0 20px;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  ${Typography.title2};
`
