import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/post-link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog Entries"></SEO>
      <h1>Blog Entries</h1>
      <div className="Posts">{Posts}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            excerpt
            path
            tags
            title
          }
        }
      }
    }
  }
`
