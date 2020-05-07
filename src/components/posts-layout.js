/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./syntax.css"
import "./post.css"

const Layout = ({ children, pageContext }) => {
  const postTitle = pageContext?.frontmatter?.title

  return (
    <>
      <div className="layout">
        <h1>ASDFASDFSAD</h1>
        <main>
          <div className="Post__title">{postTitle}</div>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
