import React from "react"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "@/components/Layout/Layout"
import PostCard from "@/components/contents/PostCard"
import breakpoints from "@/layout/breakpoints"

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
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
      }[]
    }
  }
}

export default function BlogIndexPage({ data }: Props) {
  return (
    <Layout>
      <StyledGrid>
        {data.allMarkdownRemark.nodes.map(({ fields, frontmatter }) => (
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
    </Layout>
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: [{ frontmatter: { date: DESC } }]) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
