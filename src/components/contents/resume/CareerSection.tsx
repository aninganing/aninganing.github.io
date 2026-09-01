import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { CareerEntry } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  entries: CareerEntry[]
}

export default function CareerSection({ entries }: Props) {
  return (
    <ResumeSectionShell id="career" title="경력">
      <StyledList>
        {entries.map(entry => (
          <StyledCard key={entry.company}>
            <StyledHeaderRow>
              <StyledCompany>
                {entry.company}
                {entry.companyNote && <StyledCompanyNote> {entry.companyNote}</StyledCompanyNote>}
              </StyledCompany>
              <StyledPeriod>{entry.period}</StyledPeriod>
            </StyledHeaderRow>
            <StyledRole>{entry.role}</StyledRole>
            <StyledDescription>{entry.description}</StyledDescription>
            <StyledAchieveTitle>주요 성과</StyledAchieveTitle>
            <StyledList2>
              {entry.achievements.map(achievement => (
                <li key={achievement.slice(0, 20)}>{achievement}</li>
              ))}
            </StyledList2>
          </StyledCard>
        ))}
      </StyledList>
    </ResumeSectionShell>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StyledCard = styled.div`
  padding: 20px 22px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`

const StyledHeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 2px;
`

const StyledCompany = styled.span`
  color: ${({ theme }) => theme.text};
  ${Typography.title2};
`

const StyledCompanyNote = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  ${Typography.caption2};
`

const StyledPeriod = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  white-space: nowrap;
  ${Typography.caption2};
`

const StyledRole = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.caption1};
`

const StyledDescription = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  word-break: keep-all;
  ${Typography.body3};
`

const StyledAchieveTitle = styled.div`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  ${Typography.caption2};
`

const StyledList2 = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    word-break: keep-all;
    ${Typography.body3};
  }
`
