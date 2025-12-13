import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import { Link } from "gatsby"

function Blog() {
  return (
    <section id="blog" className="bg-cream">
      <Fade>
        <Container>
          <h2 className="text-stone-brown">Writing & speaking</h2>
          <p className="mb-6 text-stone-brown text-lg leading-relaxed">
            I write and speak about software systems, work, and decision-making — especially where technology intersects with people, power, and sustainability.
          </p>
          <div className="flex flex-col gap-4">
            <Link
              to="/writing"
              className="inline-block text-blue font-medium hover:opacity-80 transition-opacity underline decoration-2 underline-offset-4 text-lg"
            >
              Read my writing →
            </Link>
            <Link
              to="/speaking"
              className="inline-block text-blue font-medium hover:opacity-80 transition-opacity underline decoration-2 underline-offset-4 text-lg"
            >
              Talks & speaking engagements →
            </Link>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Blog
