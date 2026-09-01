import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { ActivityEntry } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  entries: ActivityEntry[]
}

export default function ActivitiesSection({ entries }: Props) {
  return (
    <ResumeSectionShell id="activities" title="대외활동">
      <StyledList>
        {entries.map(entry => (
          <StyledRow key={entry.title}>
            <StyledHeaderRow>
              <StyledTitle>{entry.title}</StyledTitle>
              <StyledPeriod>{entry.period}</StyledPeriod>
            </StyledHeaderRow>
            <StyledCompany>{entry.company}</StyledCompany>
            <StyledBulletList>
              {entry.bullets.map(bullet => (
                <li key={bullet.slice(0, 20)}>{bullet}</li>
              ))}
            </StyledBulletList>
          </StyledRow>
        ))}
      </StyledList>
    </ResumeSectionShell>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledRow = styled.div``

const StyledHeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.text};
  ${Typography.title2};
`

const StyledPeriod = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  white-space: nowrap;
  ${Typography.caption2};
`

const StyledCompany = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.caption1};
`

const StyledBulletList = styled.ul`
  margin: 8px 0 0;
  padding-left: 18px;

  li {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    word-break: keep-all;
    ${Typography.body3};
  }
`
