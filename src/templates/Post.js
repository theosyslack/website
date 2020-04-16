import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="layout">
      <div className="Post">
        <h1 className="Post__title">{frontmatter.title}</h1>
        {frontmatter.subtitle && (
          <h2 className="Post__subtitle">{frontmatter.subtitle}</h2>
        )}
        {frontmatter.date && <h3 className="Post__date">{frontmatter.date}</h3>}
        <div
          className="Post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
