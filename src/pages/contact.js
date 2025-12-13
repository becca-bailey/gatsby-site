import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Container from "../components/container"
import ModalProvider from "../containers/modal-provider"
import { Fade } from "react-swift-reveal"

function ContactPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ModalProvider>
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`becca`, `contact`, `email`, `consulting`]}
        />
        <section className="py-12 small:py-16 medium:py-20">
          <Fade>
            <Container>
              <h1 className="text-4xl small:text-5xl medium:text-6xl font-header text-stone-brown mb-6">
                Get in touch
              </h1>
              <p className="text-lg text-stone-brown mb-8 leading-relaxed">
                If you think we might work well together, feel free to reach out — or take a look at how I structure engagements.
              </p>
            </Container>
          </Fade>
        </section>
        <Contact />
        <section className="bg-cream py-12 small:py-16">
          <Fade>
            <Container>
              <h2 className="text-stone-brown mb-6">Other ways to reach me</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-stone-brown font-medium mb-2">Email</p>
                  <a
                    href="mailto:becca@becca.is"
                    className="text-blue transition-colors"
                  >
                    becca@becca.is
                  </a>
                </div>
                <div>
                  <p className="text-stone-brown font-medium mb-2">Social</p>
                  <div className="flex flex-col small:flex-row gap-4">
                    <a
                      href="https://bsky.app/profile/becca.is"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue transition-colors no-underline font-medium"
                      aria-label="Follow me on Bluesky"
                    >
                      <div className="inline-flex items-center mr-2">
                        <svg
                          viewBox="0 0 600 535"
                          fill="currentColor"
                          className="mr-2 w-5 h-5"
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
                      className="flex items-center text-blue transition-colors no-underline font-medium"
                      aria-label="Connect with me on LinkedIn"
                    >
                      <div className="inline-flex items-center mr-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </div>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </Fade>
        </section>
      </Layout>
    </ModalProvider>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

