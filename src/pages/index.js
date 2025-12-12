import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import FocusedOn from "../components/focused-on"
import WaysToWork from "../components/ways-to-work"
import Blog from "../components/writing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import ModalProvider from "../containers/modal-provider"

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ModalProvider>
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`becca`, `javascript`, `software engineer`, `consulting`, `technical advisory`]}
        />
        <Hero />
        <FocusedOn />
        <WaysToWork />
        <Blog />
        <Contact />
      </Layout>
    </ModalProvider>
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
  }
`
