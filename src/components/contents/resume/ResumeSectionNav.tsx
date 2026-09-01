import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import breakpoints from "@/layout/breakpoints"

const SECTIONS = [
  { id: "intro", label: "자기소개" },
  { id: "skills", label: "기술 스택" },
  { id: "career", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "education", label: "교육" },
  { id: "activities", label: "대외활동" },
  { id: "portfolio", label: "포트폴리오" },
]

interface Props {
  offset: number
}

export default function ResumeSectionNav({ offset }: Props) {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const elements = SECTIONS.map(section => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => el !== null
    )

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveId(topMost.target.id)
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [offset])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
    setActiveId(id)
  }

  const handleLinkClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <StyledDesktopNav style={{ top: offset }} aria-label="이력서 섹션 이동">
      {SECTIONS.map(section => (
        <StyledNavLink
          key={section.id}
          href={`#${section.id}`}
          $active={activeId === section.id}
          onClick={event => handleLinkClick(event, section.id)}
        >
          {section.label}
        </StyledNavLink>
      ))}
    </StyledDesktopNav>
  )
}

const StyledDesktopNav = styled.nav`
  position: sticky;
  z-index: 9;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-self: start;
  transform: translateZ(0);

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const StyledNavLink = styled.a<{ $active: boolean }>`
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme, $active }) => ($active ? theme.accentTintText : theme.textSecondary)};
  background: ${({ theme, $active }) => ($active ? theme.accentTintBg : "transparent")};
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  ${Typography.caption1};

  &:hover {
    color: ${({ theme }) => theme.accentTintText};
    background: ${({ theme }) => theme.accentTintBg};
  }
`
