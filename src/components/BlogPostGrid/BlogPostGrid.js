import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./blogPostGrid.module.scss"

import Card from "@material/react-card"

function BlogPostGrid() {
  return (
    <StaticQuery
      query={blogPostQuery}
      render={data => {
        const posts = data.allContentfulBlogPosts.edges
        return (
          <section className="page-main__section">
            <div className="blog-posts__container">
              {posts.map(({ node }) => {
                const title = node.title || node.slug
                return (
                  <div key={node.slug} style={{ marginBottom: "20px" }}>
                    <Link to={node.slug}>
                      <Card className="mdc-card--clickable anoun-blog-card">
                        <Img
                          className="mdc-card__media"
                          fluid={node.image.fluid}
                        />
                        <div className="anoun-blog-card-content__container">
                          <h3>{title}</h3>
                          <small>{node.createdAt}</small>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: node.expert,
                            }}
                          />
                        </div>
                      </Card>
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        )
      }}
    />
  )
}

const blogPostQuery = graphql`
  {
    allContentfulBlogPosts(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          createdAt(formatString: "MMMM DD, YYYY")
          id
          slug
          title
          image {
            fluid(
              maxWidth: 1200
              quality: 92
              sizes: "(max-width: 1200px) 100vw"
            ) {
              ...GatsbyContentfulFluid
            }
          }
          expert
        }
      }
    }
  }
`

export default BlogPostGrid
