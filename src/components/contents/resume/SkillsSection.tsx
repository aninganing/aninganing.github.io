import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import breakpoints from "@/layout/breakpoints"
import { SkillCategory } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  categories: SkillCategory[]
}

export default function SkillsSection({ categories }: Props) {
  return (
    <ResumeSectionShell id="skills" title="기술 스택">
      <StyledGrid>
        {categories.map(category => (
          <StyledCategory key={category.title}>
            <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
            <StyledTags>
              {category.skills.map(skill => (
                <StyledSkillTag key={skill}>{skill}</StyledSkillTag>
              ))}
            </StyledTags>
          </StyledCategory>
        ))}
      </StyledGrid>
    </ResumeSectionShell>
  )
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 32px;
  row-gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const StyledCategory = styled.div``

const StyledCategoryTitle = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  ${Typography.caption2};
`

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const StyledSkillTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentTintBg};
  color: ${({ theme }) => theme.accentTintText};
  ${Typography.caption1};
`
