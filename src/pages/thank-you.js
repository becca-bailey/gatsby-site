import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import { Fade } from "react-swift-reveal"

class ThankYou extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle} location={this.props.location}>
        <Container>
          <Fade top cascade>
            <h1>Thank you!</h1>
          </Fade>
          <Fade>
            <p>Your submission has been received.</p>
          </Fade>
          <Link to="/">← Back</Link>
        </Container>
      </Layout>
    )
  }
}

export default ThankYou

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
