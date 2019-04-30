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
  display: flex;
  flex-direction: column;
  font-size: ${rhythm(1.5)};
  margin-top: ${rhythm(1)};

  @media (min-width: ${small}) {
    align-items: center;
    flex-direction: row;
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

const SmallOnly = styled.div`
  align-self: center;
  @media (min-width: ${small}) {
    margin-right: ${rhythm(0.5)};
  }
  @media (min-width: ${medium}) {
    display: none;
  }
`

const MediumOnly = styled.div`
  display: none;
  @media (min-width: ${medium}) {
    display: block;
  }
`

const Becca = styled(Image)`
  align-self: center;

  @media (min-width: ${medium}) {
    margin-right: ${rhythm(1)};
    display: block;
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
                  <MediumOnly>
                    <Becca
                      fadeIn={true}
                      fixed={data.becca.childImageSharp.fixed}
                      alt={author}
                      style={{
                        minWidth: 400,
                        maxWidth: "100%",
                        zIndex: -1,
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </MediumOnly>
                  <div>
                    <Fade top cascade>
                      <Heading>
                        <SmallOnly>
                          <Becca
                            fadeIn={true}
                            fixed={data.beccaSmall.childImageSharp.fixed}
                            alt={author}
                            style={{
                              margin: `0 auto`,
                            }}
                            imgStyle={{
                              borderRadius: `50%`,
                            }}
                          />
                        </SmallOnly>
                        Hi, I'm Becca!
                      </Heading>
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
                        In addition to my technical work, I am also passionate
                        about mentoring, apprenticeship, and diversity and
                        inclusion.
                      </p>
                      <p>
                        For more information,{" "}
                        <a href={withPrefix("/resume.pdf")}>view my resume</a>{" "}
                        or{" "}
                        <a href={`https://twitter.com/${social.twitter}`}>
                          follow me on twitter
                        </a>
                        ! You can also follow me on{" "}
                        <a href="https://medium.com/@becca.nelson">medium</a>{" "}
                        where I write about technology and other topics related
                        to being human.
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
    beccaSmall: file(absolutePath: { regex: "/becca.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
