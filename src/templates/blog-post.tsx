import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Typography from "@/layout/typography"
import Layout from "@/components/Layout/Layout"
import CategoryBadge from "@/components/common/CategoryBadge"
import Seo from "../components/seo"

export default function BlogPostTemplate({ data: { markdownRemark: post } }) {
  const thumbnailImage = getImage(post.frontmatter.featuredImage)
  return (
    <Layout>
      <StyledArticleHeader>
        {post.frontmatter.category && (
          <CategoryBadge>{post.frontmatter.category}</CategoryBadge>
        )}
        <StyledTitle>{post.frontmatter.title}</StyledTitle>
        {post.frontmatter.description && (
          <StyledSubTitle>{post.frontmatter.description}</StyledSubTitle>
        )}
        <StyledCreateAt>{post.frontmatter.date}</StyledCreateAt>
      </StyledArticleHeader>
      {thumbnailImage && (
        <StyledImage image={thumbnailImage} alt={post.frontmatter.title} />
      )}
      <StyledArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post.frontmatter.tags && (
          <StyledTagWrapper>
            {post.frontmatter.tags.map(tag => (
              <StyledTag key={tag}>{`# ${tag}`}</StyledTag>
            ))}
          </StyledTagWrapper>
        )}
      </StyledArticle>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
)

const StyledArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  margin: 0 auto;
`

const StyledTitle = styled.h1`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
  ${Typography.headline};
`

const StyledSubTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  ${Typography.title2}
`

const StyledCreateAt = styled.span`
  color: ${({ theme }) => theme.textTertiary};
  ${Typography.caption1};
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 720px;
  margin: 32px auto;
  display: block;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`

const StyledArticle = styled.article`
  max-width: 720px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
`

const StyledTagWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
`

const StyledTag = styled.span`
  background: ${({ theme }) => theme.accentTintBg};
  color: ${({ theme }) => theme.accent};
  padding: 6px 12px;
  border-radius: 999px;
  ${Typography.caption1}
`

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        description
        date(formatString: "yyyy.MM.DD")
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
