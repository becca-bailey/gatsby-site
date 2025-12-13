import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import { Fade } from "react-swift-reveal"
import { format } from "date-fns"

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const substack = data.allAirtable.edges.filter(({ node }) => {
    return node.data.Source === "Substack"
  })
  const rest = data.allAirtable.edges.filter(({ node }) => {
    return node.data.Source !== "Substack"
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Container small>
        <Fade cascade>
          <h1>Writing</h1>
          
          <h2>On Substack</h2>
          {substack.map(({ node }) => {
            const { id, data } = node
            const { Name: name, Date: date, URL: url } = data
            const formattedDate = format(new Date(date), "MMMM do, yyyy")
            return (
              <div key={id}>
                <h3 className="mb-[8.31px]">
                  <Link to={url}>
                    {name}
                  </Link>
                </h3>
                <p>{formattedDate}</p>
              </div>
            )
          })}

          <h2>Elsewhere</h2>
          {rest.map(({ node }) => {
            const { id, data } = node
            const { Name: name, Date: date, URL: url, Source: source } = data
            const formattedDate = format(new Date(date), "MMMM do, yyyy")
            return (
              <div key={id}>
                <h3 className="mb-[8.31px]">
                  <Link to={url}>
                    {name}
                  </Link>
                </h3>
                <p>
                  {source} - {formattedDate}{" "}
                </p>
              </div>
            )
          })}

          <h2>On Here</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3 className="mb-[8.31px]">
                  <Link to={node.fields.slug}>
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
      sort: { data: { Date: DESC } }
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
