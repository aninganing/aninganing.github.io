import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Typography from "@/layout/typography"
import breakpoints from "@/layout/breakpoints"
import useCountUp from "@/components/contents/resume/useCountUp"

interface Props {
  totalMonths: number
  companyChanges: number
}

export default function CareerStatsBar({ totalMonths, companyChanges }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setActive(true)
      setSkipAnimation(true)
      return
    }
    const el = ref.current
    if (!el) return

    let isFirstCallback = true

    const observer = new IntersectionObserver(
      entries => {
        const isIntersecting = entries[0].isIntersecting

        if (isFirstCallback) {
          isFirstCallback = false
          if (isIntersecting) {
            // already visible on load, without any scrolling — skip the reveal animation
            setSkipAnimation(true)
            setActive(true)
            observer.disconnect()
          }
          return
        }

        if (isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const animatedYears = useCountUp(years, active, 900, skipAnimation)
  const animatedMonths = useCountUp(months, active, 900, skipAnimation)
  const animatedChanges = useCountUp(companyChanges, active, 700, skipAnimation)

  return (
    <StyledWrap ref={ref}>
      <StyledStat>
        <StyledLabel>총 경력</StyledLabel>
        <StyledNumber>
          {animatedYears}년 {animatedMonths}개월
        </StyledNumber>
      </StyledStat>
      <StyledStat>
        <StyledLabel>이직</StyledLabel>
        <StyledNumber>{animatedChanges}회</StyledNumber>
      </StyledStat>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  display: flex;
  gap: 56px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 32px;
  }
`

const StyledStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.body2};
`

const StyledNumber = styled.span`
  color: ${({ theme }) => theme.accent};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 32px;
  }
`
