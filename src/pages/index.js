import { graphql } from "gatsby"
import React from "react"
import About from "../components/about"
import Blog from "../components/writing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Speaking from "../components/speaking"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`becca`, `javascript`, `software engineer`]}
        />
        <About />
        <Speaking />
        <Blog />
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
  }
`
