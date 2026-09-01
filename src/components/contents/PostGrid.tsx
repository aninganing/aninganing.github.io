import React from "react"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import PostCard from "@/components/contents/PostCard"
import breakpoints from "@/layout/breakpoints"

interface PostNode {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string | null
    date: string | null
    description: string | null
    category: any
    featuredImage: any
  }
}

interface Props {
  nodes: PostNode[]
}

export default function PostGrid({ nodes }: Props) {
  return (
    <StyledGrid>
      {nodes.map(({ fields, frontmatter }) => (
        <PostCard
          key={fields.slug}
          slug={fields.slug}
          category={frontmatter.category}
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          image={getImage(frontmatter.featuredImage)}
        />
      ))}
    </StyledGrid>
  )
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
