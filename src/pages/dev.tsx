import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/Layout/Layout"
import Seo from "@/components/seo"
import PostGrid from "@/components/contents/PostGrid"

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

export default function DevPage({ data }: Props) {
  return (
    <Layout>
      <PostGrid nodes={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

export const Head = () => <Seo title="Dev" />

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "dev" } } }
      sort: [{ frontmatter: { date: DESC } }]
    ) {
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
