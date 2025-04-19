/**
 * About component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { medium, small } from "../utils/breakpoints"
import { rhythm } from "../utils/typography"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import "./about.css"

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${rhythm(1.5)};
  margin-top: 0;

  @media (min-width: ${small}) {
    align-items: center;
    flex-direction: row;
    font-size: ${rhythm(2)};
  }

  @media (min-width: ${medium}) {
    margin-top: ${rhythm(1)};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
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

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata
        return (
          <section id="about">
            <Fade>
              <Container>
                <Row>
                  <MediumOnly>
                    <StaticImage
                      src="../../content/assets/becca.png"
                      alt={author}
                      className="image becca"
                      width={400}
                      height={400}
                    />
                  </MediumOnly>
                  <div>
                    <Fade top cascade>
                      <Heading>Hi, I'm Becca!</Heading>
                    </Fade>
                    <Fade>
                      <p>
                        I think I was drawn towards a career in tech because I
                        am a huge fan of iterative processes and making things
                        better. Seven years later, I still love improving
                        things, whether it's web performance, team processes, or
                        user experience. I am an engineering manager, a frequent
                        user of the JavaScript dev tools, an occasional
                        conference speaker, and a fan of a good diagram for
                        explaining technical concepts to teammates and
                        stakeholders.
                      </p>
                    </Fade>
                  </div>
                </Row>
                <Row>
                  <div>
                    <Fade>
                      <h2>Want to learn more?</h2>
                    </Fade>
                    <Fade>
                      <p>
                        Prior to my career in software, I majored in music
                        education and worked in music and fine arts education.
                        My current technical specialties include React, web
                        performance, and data visualization. I have been one of
                        the primary maintainers of{" "}
                        <a href="https://formidable.com/open-source/victory">
                          Victory
                        </a>
                        , Formidable's charting library written with React and
                        d3. I manage people, and occasionally give conference
                        talks on state management, refactoring, and building
                        strong technical teams.
                      </p>
                    </Fade>
                  </div>
                  <MediumOnly>
                    <ImageContainer>
                      <StaticImage
                        src="../../content/assets/coffee.png"
                        alt="Mmmm Coffee"
                        className="image coffee"
                        width={200}
                        height={200}
                      />
                      <StaticImage
                        src="../../content/assets/lucy.png"
                        alt="Lucy Cat"
                        className="image lucy"
                        width={300}
                        height={300}
                      />
                    </ImageContainer>
                  </MediumOnly>
                </Row>
                <SmallOnly>
                  <Grid>
                    <StaticImage
                      src="../../content/assets/becca.png"
                      alt={author}
                      className="image"
                    />
                    <StaticImage
                      src="../../content/assets/coffee.png"
                      alt="Mmmm Coffee"
                      className="image"
                    />
                    <StaticImage
                      src="../../content/assets/lucy.png"
                      alt="Lucy Cat"
                      className="image"
                    />
                  </Grid>
                </SmallOnly>
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
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default About
