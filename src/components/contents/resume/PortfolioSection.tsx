import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { PortfolioLink } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  links: PortfolioLink[]
}

export default function PortfolioSection({ links }: Props) {
  return (
    <ResumeSectionShell id="portfolio" title="포트폴리오">
      <StyledList>
        {links.map(link => (
          <StyledRow key={link.url}>
            <StyledLabel>{link.label}</StyledLabel>
            <StyledLink href={link.url} target="_blank" rel="noreferrer">
              {link.url}
            </StyledLink>
          </StyledRow>
        ))}
      </StyledList>
    </ResumeSectionShell>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
`

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.caption1};
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  ${Typography.body3};

  &:hover {
    text-decoration: underline;
  }
`
