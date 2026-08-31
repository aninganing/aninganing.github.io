import React from "react"
import styled from "styled-components"
import { useThemeMode } from "@/context/ThemeContext"

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode()
  const isDark = mode === "dark"

  return (
    <StyledToggle onClick={toggleTheme} aria-label="테마 전환">
      <StyledIcon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="14"
          height="14"
        >
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </StyledIcon>
      <StyledIcon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="14"
          height="14"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </StyledIcon>
      <StyledThumb $isDark={isDark} />
    </StyledToggle>
  )
}

const StyledToggle = styled.button`
  position: relative;
  width: 56px;
  height: 30px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  cursor: pointer;
  flex-shrink: 0;
`

const StyledIcon = styled.span`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.textSecondary};
  position: relative;
  z-index: 1;
  display: flex;
`

const StyledThumb = styled.span<{ $isDark: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ $isDark }) => ($isDark ? "26px" : "0px")});
`
