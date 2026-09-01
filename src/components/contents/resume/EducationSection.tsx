import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { EducationEntry } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  entries: EducationEntry[]
}

export default function EducationSection({ entries }: Props) {
  return (
    <ResumeSectionShell id="education" title="교육">
      <StyledList>
        {entries.map(entry => (
          <StyledRow key={entry.school}>
            <StyledHeaderRow>
              <StyledSchool>{entry.school}</StyledSchool>
              <StyledPeriod>{entry.period}</StyledPeriod>
            </StyledHeaderRow>
            <StyledDetail>{entry.detail}</StyledDetail>
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

const StyledSchool = styled.span`
  color: ${({ theme }) => theme.text};
  ${Typography.title2};
`

const StyledPeriod = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  white-space: nowrap;
  ${Typography.caption2};
`

const StyledDetail = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.caption1};
`
