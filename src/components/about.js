/**
 * About component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery, withPrefix } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { medium, small } from "../utils/breakpoints"
import { rhythm } from "../utils/typography"
import Container from "./container"
import Fade from "react-reveal/Fade"

const Heading = styled.h1`
  font-size: ${rhythm(1.5)};
  margin-top: ${rhythm(1)};

  @media (min-width: ${small}) {
    font-size: ${rhythm(2)};
  }

  @media (min-width: ${medium}) {
    margin-left: -${rhythm(3)};
  }
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${rhythm(1)};

  @media (min-width: ${medium}) {
    flex-direction: row;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  max-width: 100%;
  align-self: center;

  @media (min-width: ${small}) {
    height: ${rhythm(14)};
  }

  @media (min-width: ${medium}) {
    flex-direction: row;
    align-items: center;
    min-width: ${rhythm(16)};
  }
`

const Becca = styled(Image)`
  align-self: center;

  @media (min-width: ${medium}) {
    margin-right: ${rhythm(1)};
  }
`

const Lucy = styled(Image)`
  @media (min-width: ${small}) {
    position: "relative";
  }
`

const Coffee = styled(Image)`
  @media (min-width: ${small}) {
    position: "relative";
    left: ${rhythm(1)};
    top: ${rhythm(5)};
  }
`

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <section id="about">
            <Fade>
              <Container>
                <Row>
                  <Becca
                    fadeIn={true}
                    fixed={data.becca.childImageSharp.fixed}
                    alt={author}
                    style={{
                      minWidth: 400,
                      zIndex: -1,
                    }}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                  <div>
                    <Fade top cascade>
                      <Heading>Hi, I'm Becca!</Heading>
                    </Fade>
                    <Fade>
                      <p>
                        I'm a software engineer who loves to design things.
                        After previous career as an elementary fine arts
                        teacher, I love helping artists and career changers
                        understand software.{" "}
                      </p>
                    </Fade>
                  </div>
                </Row>
                <Row>
                  <div>
                    <Fade left cascade>
                      <h2>Want to learn more?</h2>
                    </Fade>
                    <Fade>
                      <p>
                        As a full-stack developer, I care about using the best
                        tools available to solve technical problems. But when
                        I’m building software that is being used by real people,
                        I am especially interested in the user-facing parts of
                        our applications, and continually learning how to use
                        front-end development and design to create the best
                        possible experience for the user. In addition to my
                        technical work, I am also passionate about mentoring,
                        apprenticeship, and diversity and inclusion. For more
                        information,{" "}
                        <a href={withPrefix("/resume.pdf")}>view my resume</a>{" "}
                        or{" "}
                        <a href={`https://twitter.com/${social.twitter}`}>
                          follow me on twitter
                        </a>
                        !
                      </p>
                    </Fade>
                  </div>
                  <ImageContainer>
                    <Coffee
                      fadeIn={true}
                      fixed={data.coffee.childImageSharp.fixed}
                      alt="Mmmm Coffee"
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                    <Lucy
                      fadeIn={true}
                      fixed={data.lucy.childImageSharp.fixed}
                      alt="Lucy Cat"
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </ImageContainer>
                </Row>
              </Container>
            </Fade>
          </section>
        )
      }}
    />
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    becca: file(absolutePath: { regex: "/becca.png/" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lucy: file(absolutePath: { regex: "/lucy.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    coffee: file(absolutePath: { regex: "/coffee.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
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

export default About
