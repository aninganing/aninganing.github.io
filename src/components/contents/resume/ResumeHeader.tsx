import React from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import { ProfileInfo } from "@/data/resume"
import CopyEmailButton from "@/components/contents/resume/CopyEmailButton"

interface Props {
  profile: ProfileInfo
}

export default function ResumeHeader({ profile }: Props) {
  return (
    <StyledHeader>
      <StyledName>{profile.name}</StyledName>
      <StyledTitle>{profile.title}</StyledTitle>
      <StyledEmailRow>
        <StyledEmail>{profile.email}</StyledEmail>
        <CopyEmailButton email={profile.email} />
      </StyledEmailRow>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding-bottom: 24px;
  margin-bottom: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.text};
`

const StyledName = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
  ${Typography.headline};
`

const StyledTitle = styled.p`
  margin: 6px 0 0;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.body2};
`

const StyledEmailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`

const StyledEmail = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  ${Typography.caption1};
`
