import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import { ButtonLink } from "./button"

function Blog() {
  return (
    <section id="blog" className="bg-cream">
      <Fade>
        <Container>
          <h2 className="text-stone-brown">Writing & speaking</h2>
          <p className="mb-6 text-stone-brown text-lg leading-relaxed">
            I write and speak about software systems, work, and decision-making — especially where technology intersects with people, power, and sustainability.
          </p>
          <div className="flex flex-col small:flex-row gap-4">
            <ButtonLink 
              to="/writing" 
              variant="secondary"
              className="px-6 py-3"
            >
              Read my writing →
            </ButtonLink>
            <ButtonLink 
              to="/speaking" 
              variant="secondary"
              className="px-6 py-3"
            >
              Talks & speaking engagements →
            </ButtonLink>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Blog
