import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function WaysToWork() {
  return (
    <section id="ways-to-work" aria-label="Ways to work together">
      <Fade>
        <Container>
          <div className="flex flex-col medium:flex-row medium:items-center medium:gap-12">
            <div className="flex-1 order-2 medium:order-1">
              <h2 aria-level="2" className="text-stone-brown">Ways we might work together</h2>
              <ul className="list-none space-y-5 ml-0 mb-6">
                <li className="flex items-start">
                  <span className="text-pink mr-4 text-2xl leading-none">→</span>
                  <span className="text-stone-brown text-lg leading-relaxed flex-1">Technical diagnostic sprints to identify what's working, what's fragile, and what matters most</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink mr-4 text-2xl leading-none">→</span>
                  <span className="text-stone-brown text-lg leading-relaxed flex-1">Fixed-scope implementation projects with clear outcomes and clear boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink mr-4 text-2xl leading-none">→</span>
                  <span className="text-stone-brown text-lg leading-relaxed flex-1">Advisory sessions for architecture decisions, code reviews, and prioritization</span>
                </li>
              </ul>
              <p className="mb-6 text-stone-brown text-lg">
                I work in short, well-defined engagements rather than open-ended freelancing.
              </p>
              <Link
                to="/work-with-me"
                className="inline-block text-blue font-medium hover:opacity-80 transition-opacity underline decoration-2 underline-offset-4 text-lg"
              >
                Learn more on Work With Me →
              </Link>
            </div>
            <div className="flex-shrink-0 flex justify-center mb-6 medium:mb-0 order-1 medium:order-2">
              <StaticImage
                src="../../content/assets/lucy.png"
                alt=""
                className="rounded-full w-32 medium:w-48"
                width={256}
                height={256}
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default WaysToWork

