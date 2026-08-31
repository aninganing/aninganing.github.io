import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Typography from "@/layout/typography"
import CategoryBadge from "@/components/common/CategoryBadge"

interface Props {
  slug: string
  category: string
  title: string
  date: string
  description: string
  image?: IGatsbyImageData
}

export default function PostCard({
  slug,
  category,
  title,
  date,
  description,
  image,
}: Props) {
  return (
    <StyledCard to={slug}>
      {image && <StyledImage image={image} alt={title} />}
      <StyledBody>
        {category && <CategoryBadge>{category}</CategoryBadge>}
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{date}</StyledDate>
        <StyledDescription>{description}</StyledDescription>
      </StyledBody>
    </StyledCard>
  )
}

const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.accent};
  }
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 190px;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 22px 24px;
`

const StyledTitle = styled.h3`
  margin: 2px 0 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${Typography.title1};
`

const StyledDate = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  ${Typography.caption2};
`

const StyledDescription = styled.p`
  margin: 0;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.body3};
`
