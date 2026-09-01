import React, { useState } from "react"
import styled from "styled-components"
import { ProjectEntry } from "@/data/resume"
import ResumeSectionShell from "@/components/contents/resume/ResumeSectionShell"
import ProjectAccordionItem from "@/components/contents/resume/ProjectAccordionItem"

interface Props {
  entries: ProjectEntry[]
}

export default function ProjectsSection({ entries }: Props) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(entries[0] ? [entries[0].id] : [])
  )

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <ResumeSectionShell id="projects" title="프로젝트">
      <StyledList>
        {entries.map(entry => (
          <ProjectAccordionItem
            key={entry.id}
            entry={entry}
            isOpen={openIds.has(entry.id)}
            onToggle={() => toggle(entry.id)}
          />
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
