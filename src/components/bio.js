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

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <div className="flex flex-col items-center justify-center small:flex-row">
              <GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt={author}
                className="mr-[16.625px] mb-0 min-w-[150px] rounded-full"
                imgStyle={{
                  borderRadius: `50%`,
                }} />
              <p className="m-0 p-0">
                I'm a software engineer who loves to design things. After
                previous career as an elementary fine arts teacher, I love
                helping artists and career changers understand software.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  You should follow me on Twitter
                </a>
                .
              </p>
            </div>
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
