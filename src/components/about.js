/**
 * About component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={(data) => {
        return (
          <section id="about" aria-label="About Becca">
            <Fade>
              <Container>
                <div className="flex justify-center flex-col mb-[33.25px] medium:flex-row medium:items-center">
                  <div className="hidden medium:block">
                    <StaticImage
                      src="../../content/assets/becca.png"
                      alt="Portrait of Becca Bailey"
                      className="rounded-full min-w-[400px] max-w-full align-center mr-7 medium:block"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div>
                    <Fade top cascade>
                      <h1 className="flex flex-col text-[49.88px] mt-0 small:items-center small:flex-row small:text-[66.5px] medium:mt-[33.25px] medium:-ml-[99.75px]" aria-level="1">Hi, I'm Becca!</h1>
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
                </div>
                <div className="flex justify-center flex-col mb-[33.25px] medium:flex-row medium:items-center">
                  <div>
                    <Fade>
                      <h2 aria-level="2">Want to learn more?</h2>
                    </Fade>
                    <Fade>
                      <p>
                        Prior to my career in software, I majored in music
                        education and worked in music and fine arts education.
                        My current technical specialties include React, web
                        performance, and data visualization. I have been one of
                        the primary maintainers of{" "}
                        <a
                          href="https://formidable.com/open-source/victory"
                          aria-label="Victory charting library"
                        >
                          Victory
                        </a>
                        , Formidable's charting library written with React and
                        d3. I manage people, and occasionally give conference
                        talks on state management, refactoring, and building
                        strong technical teams.
                      </p>
                    </Fade>
                    <Fade>
                      <div className="mt-[33.25px] text-left" aria-label="Social media links">
                        <p>You can also find me on:</p>
                        <a
                          href="https://bsky.app/profile/becca.is"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center mb-[16.625px] text-primary no-underline font-medium hover:underline"
                          aria-label="Follow me on Bluesky"
                        >
                          <div className="inline-flex items-center mr-[8.31px]">
                            <svg
                              viewBox="0 0 600 535"
                              fill="currentColor"
                              className="mr-[8.31px] w-5 h-5"
                              aria-hidden="true"
                            >
                              <path d="M299.75 238.48C273.424 187.473 202.014 92.2 135.54 45.31 71.863.391 47.512 8.124 31.72 15.364c-18.428 8.392-21.719 36.692-21.719 53.311s9.05 136.57 15.138 156.48c19.745 66.145 89.674 88.522 154.17 81.282 3.29-.494 6.582-.987 10.037-1.316-3.29.493-6.746.987-10.037 1.316-94.445 13.986-178.52 48.374-68.284 170.96 121.1 125.38 166.02-26.82 189.06-104.15 23.035 77.169 49.526 223.94 186.75 104.15 103.17-104.15 28.301-156.97-66.145-170.96-3.29-.33-6.746-.823-10.037-1.316 3.455.493 6.746.822 10.037 1.316 64.499 7.24 134.59-15.138 154.17-81.282 5.923-20.074 15.138-139.86 15.138-156.48s-3.29-44.919-21.719-53.311c-15.96-7.24-40.148-14.973-103.82 29.946-66.967 47.058-138.38 142.16-164.7 193.17z" />
                            </svg>
                          </div>
                          Bluesky
                        </a>
                        <a
                          href="https://www.linkedin.com/in/beccamakesthings/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center mb-[16.625px] text-primary no-underline font-medium hover:underline"
                          aria-label="Connect with me on LinkedIn"
                        >
                          <div className="inline-flex items-center mr-[8.31px]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="mr-[8.31px] w-5 h-5"
                              aria-hidden="true"
                            >
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </div>
                          LinkedIn
                        </a>
                      </div>
                    </Fade>
                  </div>
                  <div className="hidden medium:block">
                    <div className="max-w-full self-center small:h-[465.5px] medium:flex-row medium:items-center medium:min-w-[532px]">
                      <StaticImage
                        src="../../content/assets/coffee.png"
                        alt=""
                        className="rounded-full small:left-7 small:top-48"
                        width={200}
                        height={200}
                        aria-hidden="true"
                      />
                      <StaticImage
                        src="../../content/assets/lucy.png"
                        alt=""
                        className="rounded-full"
                        width={300}
                        height={300}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-center small:mr-[16.625px] medium:hidden">
                  <div className="grid grid-cols-3 gap-4">
                    <StaticImage
                      src="../../content/assets/becca.png"
                      alt="Portrait of Becca Bailey"
                      className="rounded-full"
                    />
                    <StaticImage
                      src="../../content/assets/coffee.png"
                      alt=""
                      className="rounded-full"
                      aria-hidden="true"
                    />
                    <StaticImage
                      src="../../content/assets/lucy.png"
                      alt=""
                      className="rounded-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>
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
