import React from "react"
import styled from "styled-components"
import Header from "@/components/Layout/Header"
import TopNav from "@/components/Layout/TopNav"
import ThemeToggle from "@/components/common/ThemeToggle"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <StyledLayoutWrapper>
      <StyledHeaderBar>
        <StyledHeaderInner>
          <Header />
          <StyledHeaderRight>
            <TopNav />
            <ThemeToggle />
          </StyledHeaderRight>
        </StyledHeaderInner>
      </StyledHeaderBar>
      <StyledContentsWrapper>
        <StyledContents>{children}</StyledContents>
      </StyledContentsWrapper>
    </StyledLayoutWrapper>
  )
}

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition:
    background 0.25s ease,
    color 0.25s ease;
`

const StyledHeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const StyledHeaderInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 32px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    padding: 16px 20px;
  }
`

const StyledHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledContentsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 32px 96px;
`

const StyledContents = styled.div`
  width: 100%;
  max-width: 1040px;
`
