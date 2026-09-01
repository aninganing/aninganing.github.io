import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { ProjectEntry } from "@/data/resume"

interface Props {
  entry: ProjectEntry
  isOpen: boolean
  onToggle: () => void
}

export default function ProjectAccordionItem({ entry, isOpen, onToggle }: Props) {
  const bodyId = `${entry.id}-body`

  return (
    <StyledCard>
      <StyledHeader
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={bodyId}
      >
        <StyledHeaderMain>
          <StyledHeaderTop>
            <StyledTitle>{entry.title}</StyledTitle>
            <StyledPeriod>{entry.period}</StyledPeriod>
          </StyledHeaderTop>
          <StyledCompany>{entry.company}</StyledCompany>
          <StyledDescription>{entry.description}</StyledDescription>
        </StyledHeaderMain>
        <StyledChevron $isOpen={isOpen}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </StyledChevron>
      </StyledHeader>

      <StyledBodyOuter $isOpen={isOpen}>
        <StyledBodyInner id={bodyId}>
          {entry.subGroups.map(subGroup => (
            <StyledSubGroup key={subGroup.title}>
              <StyledSubGroupTitle>{subGroup.title}</StyledSubGroupTitle>
              <StyledBulletList>
                {subGroup.bullets.map(bullet => (
                  <li key={(bullet.label ?? bullet.text).slice(0, 24)}>
                    {bullet.label && <StyledLabel>{bullet.label} </StyledLabel>}
                    {bullet.text}
                  </li>
                ))}
              </StyledBulletList>
            </StyledSubGroup>
          ))}
        </StyledBodyInner>
      </StyledBodyOuter>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:has(button:hover) {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`

const StyledHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
`

const StyledHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`

const StyledHeaderTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
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

const StyledCompany = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.caption1};
`

const StyledDescription = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  word-break: keep-all;
  ${Typography.body3};
`

const StyledChevron = styled.span<{ $isOpen: boolean }>`
  flex-shrink: 0;
  display: flex;
  color: ${({ theme }) => theme.textSecondary};
  transform: rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
  transition: transform 0.2s ease;
  margin-top: 4px;
`

const StyledBodyOuter = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    grid-template-rows 0.25s ease,
    opacity 0.2s ease;
`

const StyledBodyInner = styled.div`
  overflow: hidden;
  min-height: 0;
  padding: 0 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:not(:empty) {
    padding-bottom: 22px;
  }
`

const StyledSubGroup = styled.div``

const StyledSubGroupTitle = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  ${Typography.body3};
`

const StyledBulletList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    word-break: keep-all;
    ${Typography.body3};
  }
`

const StyledLabel = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`
