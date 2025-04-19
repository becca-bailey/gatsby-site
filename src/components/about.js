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

const SocialLinks = styled.div`
  margin-top: ${rhythm(1)};
  text-align: left;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(0.5)};
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: ${rhythm(0.25)};
    width: 20px;
    height: 20px;
  }
`

const SocialIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: ${rhythm(0.25)};
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
                      <p>
                        I am currently looking for a new role as a Senior+
                        Software Engineer or Engineering Manager.
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
                    <Fade>
                      <SocialLinks>
                        <p>You can also find me on:</p>
                        <SocialLink
                          href="https://bsky.app/profile/becca.is"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon>
                            <svg viewBox="0 0 600 535" fill="currentColor">
                              <path d="M299.75 238.48C273.424 187.473 202.014 92.2 135.54 45.31 71.863.391 47.512 8.124 31.72 15.364c-18.428 8.392-21.719 36.692-21.719 53.311s9.05 136.57 15.138 156.48c19.745 66.145 89.674 88.522 154.17 81.282 3.29-.494 6.582-.987 10.037-1.316-3.29.493-6.746.987-10.037 1.316-94.445 13.986-178.52 48.374-68.284 170.96 121.1 125.38 166.02-26.82 189.06-104.15 23.035 77.169 49.526 223.94 186.75 104.15 103.17-104.15 28.301-156.97-66.145-170.96-3.29-.33-6.746-.823-10.037-1.316 3.455.493 6.746.822 10.037 1.316 64.499 7.24 134.59-15.138 154.17-81.282 5.923-20.074 15.138-139.86 15.138-156.48s-3.29-44.919-21.719-53.311c-15.96-7.24-40.148-14.973-103.82 29.946-66.967 47.058-138.38 142.16-164.7 193.17z" />
                            </svg>
                          </SocialIcon>
                          Bluesky
                        </SocialLink>
                        <SocialLink
                          href="https://www.linkedin.com/in/beccamakesthings/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </SocialIcon>
                          LinkedIn
                        </SocialLink>
                      </SocialLinks>
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
