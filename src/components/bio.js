/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "../components/container"

import { rhythm } from "../utils/typography"
import styled from "styled-components"
import { small } from "../utils/breakpoints"

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${small}) {
    flex-direction: row;
  }
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <BioContainer>
              <GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 150,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }} />
              <p>
                I'm a software engineer who loves to design things. After
                previous career as an elementary fine arts teacher, I love
                helping artists and career changers understand software.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  You should follow me on Twitter
                </a>
                .
              </p>
            </BioContainer>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/becca.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 150, height: 150, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
  }
}
`

export default Bio
