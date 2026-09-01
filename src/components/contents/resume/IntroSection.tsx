import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"

interface Props {
  paragraphs: string[]
}

export default function IntroSection({ paragraphs }: Props) {
  return (
    <ResumeSectionShell id="intro" title="자기소개">
      <StyledWrap>
        {paragraphs.map(paragraph => (
          <StyledParagraph key={paragraph.slice(0, 20)}>{paragraph}</StyledParagraph>
        ))}
      </StyledWrap>
    </ResumeSectionShell>
  )
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.75;
  word-break: keep-all;
  ${Typography.body3};
`
