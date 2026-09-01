import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/Layout/Layout"
import PostGrid from "@/components/contents/PostGrid"
import Seo from "@/components/seo"

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
      <PostGrid nodes={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

export const Head = () => <Seo />

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
