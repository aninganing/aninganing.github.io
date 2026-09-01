import React from "react"
import styled from "styled-components"
import Layout from "@/components/Layout/Layout"
import Seo from "@/components/seo"
import breakpoints from "@/layout/breakpoints"
import { resumeData, getTotalCareerMonths } from "@/data/resume"
import useHeaderOffset from "@/components/contents/resume/useHeaderOffset"
import ResumeHeader from "@/components/contents/resume/ResumeHeader"
import ResumeSectionNav from "@/components/contents/resume/ResumeSectionNav"
import CareerStatsBar from "@/components/contents/resume/CareerStatsBar"
import IntroSection from "@/components/contents/resume/IntroSection"
import SkillsSection from "@/components/contents/resume/SkillsSection"
import CareerSection from "@/components/contents/resume/CareerSection"
import ProjectsSection from "@/components/contents/resume/ProjectsSection"
import EducationSection from "@/components/contents/resume/EducationSection"
import ActivitiesSection from "@/components/contents/resume/ActivitiesSection"
import PortfolioSection from "@/components/contents/resume/PortfolioSection"

export default function ResumePage() {
  const offset = useHeaderOffset()
  const totalCareerMonths = getTotalCareerMonths(resumeData.career)

  return (
    <Layout>
      <StyledWrap style={{ "--resume-header-offset": `${offset}px` } as React.CSSProperties}>
        <ResumeHeader profile={resumeData.profile} />
        <StyledGrid>
          <ResumeSectionNav offset={offset} />
          <StyledContent>
            <IntroSection paragraphs={resumeData.intro} />
            <SkillsSection categories={resumeData.skills} />
            <CareerStatsBar
              totalMonths={totalCareerMonths}
              companyChanges={resumeData.stats.companyChanges}
            />
            <CareerSection entries={resumeData.career} />
            <ProjectsSection entries={resumeData.projects} />
            <EducationSection entries={resumeData.education} />
            <ActivitiesSection entries={resumeData.activities} />
            <PortfolioSection links={resumeData.portfolio} />
          </StyledContent>
        </StyledGrid>
      </StyledWrap>
    </Layout>
  )
}

export const Head = () => <Seo title="이력서" />

const StyledWrap = styled.div``

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const StyledContent = styled.div`
  min-width: 0;
`
