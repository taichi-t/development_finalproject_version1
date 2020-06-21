import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

// Styles
import styles from "./blogPost.module.scss"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPosts

    return (
      <CenteredLayout location={this.props.location}>
        <SEO title={post.title} description={post.excerpt} />
        <h1>{post.title}</h1>
        <p
          style={{
            display: `block`,
          }}
        >
          {post.date}
        </p>
        <Img fluid={post.image.fluid} />
        <div
          className={styles.blogPostContent}
          dangerouslySetInnerHTML={{
            __html: post.longText.childMarkdownRemark.html,
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        />
      </CenteredLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      category
      createdAt(formatString: "MMMM DD, YYYY")
      id
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      longText {
        childMarkdownRemark {
          html
        }
      }
      slug
      subtitle
      title
      expert
    }
  }
`
