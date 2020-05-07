import React from "react"
import { Link } from "gatsby"

import "./post-link.css"

const PostLink = ({ post }) => {
  const { frontmatter } = post
  const { title, excerpt, date, path, tags } = frontmatter

  return (
    <div className="PostLink">
      <Link to={path} className="PostLink__title">
        {title}
      </Link>
      <div className="PostLink__tags">
        <div className="PostLink__date">{date}</div>

        {tags &&
          tags.map(tag => (
            <div key={`tag-${tag}`} className="PostLink__tag">
              {tag}
            </div>
          ))}
      </div>
      <div className="PostLink__excerpt">{excerpt}</div>
    </div>
  )
}

export default PostLink
