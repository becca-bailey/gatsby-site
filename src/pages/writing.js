import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Container from "../components/container"
import { Fade } from "react-swift-reveal"
import { format } from "date-fns"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const substack = data.allAirtable.edges.filter(({ node }) => {
      return node.data.Source === "Substack"
    })
    const rest = data.allAirtable.edges.filter(({ node }) => {
      return node.data.Source !== "Substack"
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Container small>
          <Fade cascade>
            <h1>On Substack</h1>
            {substack.map(({ node }) => {
              const { id, data } = node
              const { Name: name, Date: date, URL: url } = data
              const formattedDate = format(new Date(date), "MMMM do, yyyy")
              return (
                <div key={id}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={url}>
                      {name}
                    </Link>
                  </h3>
                  <p>{formattedDate}</p>
                </div>
              )
            })}
          </Fade>
        </Container>
        <Container small>
          <Fade cascade>
            <h1>Elsewhere</h1>
            {rest.map(({ node }) => {
              const { id, data } = node
              const { Name: name, Date: date, URL: url, Source: source } = data
              const formattedDate = format(new Date(date), "MMMM do, yyyy")
              return (
                <div key={id}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={url}>
                      {name}
                    </Link>
                  </h3>
                  <p>
                    {source} - {formattedDate}{" "}
                  </p>
                </div>
              )
            })}
          </Fade>
        </Container>
        <Container small>
          <Fade cascade>
            <h1>On Here</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
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
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    allAirtable(
      filter: { table: { eq: "Writing" } }
      sort: { fields: data___Date, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            URL
            Name
            Date
            Source
          }
        }
      }
    }
  }
`
