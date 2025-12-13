import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import { ButtonLink } from "./button"

function CTA() {
  return (
    <section id="cta" aria-label="Get in touch" className="bg-cream">
      <Fade>
        <Container>
          <h2 className="text-stone-brown">Get in touch</h2>
          <p className="mb-6 text-stone-brown text-lg leading-relaxed">
            If you think we might work well together, feel free to reach out — or take a look at how I structure engagements.
          </p>
          <div className="flex flex-col small:flex-row gap-4">
            <ButtonLink
              to="/work-with-me"
              variant="primary"
            >
              Work With Me
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="secondary"
            >
              Contact
            </ButtonLink>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default CTA

