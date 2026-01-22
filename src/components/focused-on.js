import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function FocusedOn() {
  return (
    <section
      id="focused-on"
      aria-label="What I'm focused on right now"
      className="bg-cream"
    >
      <Fade>
        <Container>
          <div className="flex flex-col medium:flex-row medium:items-center medium:gap-12">
            <div className="flex-shrink-0 flex justify-center mb-6 medium:mb-0">
              <StaticImage
                src="../../content/assets/coffee.png"
                alt=""
                className="rounded-full w-32 medium:w-48"
                width={256}
                height={256}
                aria-hidden="true"
              />
            </div>
            <div className="flex-1">
              <h2 aria-level="2" className="text-stone-brown">
                What I'm focused on right now
              </h2>
              <ul className="list-none space-y-4 ml-0">
                <li className="flex items-start">
                  <span className="text-peach mr-3 text-xl">•</span>
                  <span className="text-stone-brown text-lg leading-relaxed">
                    Helping early-stage founders untangle technical debt and
                    unclear architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-3 text-xl">•</span>
                  <span className="text-stone-brown text-lg leading-relaxed">
                    Advising teams who've moved fast and want to stabilize what
                    they've built
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-3 text-xl">•</span>
                  <span className="text-stone-brown text-lg leading-relaxed">
                    Designing and building high-trust systems in legal and
                    mission-driven contexts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-peach mr-3 text-xl">•</span>
                  <span className="text-stone-brown text-lg leading-relaxed">
                    Writing and speaking about sustainable engineering,
                    decision-making, and systems that support people (not just
                    growth)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default FocusedOn
