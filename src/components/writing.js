import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import Fade from "react-reveal/Fade"

function Blog() {
  return (
    <StaticQuery
      query={blogPreviewQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <section id="blog">
            <Container>
              <h2>Writing</h2>
              <Fade cascade>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </div>
                  )
                })}
              </Fade>
              <a href="/blog">View all →</a>
            </Container>
          </section>
        )
      }}
    />
  )
}

const blogPreviewQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default Blog
