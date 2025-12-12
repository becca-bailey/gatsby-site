import { Link } from "gatsby"
import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function Blog() {
  return (
    <section id="blog">
      <Fade>
        <Container>
          <h2>Writing & speaking</h2>
          <p className="mb-4">
            I write and speak about software systems, work, and decision-making — especially where technology intersects with people, power, and sustainability.
          </p>
          <div className="mb-4">
            <Link to="/writing" className="text-primary font-medium hover:underline">
              → Read my writing
            </Link>
          </div>
          <div className="mb-4">
            <Link to="/speaking" className="text-primary font-medium hover:underline">
              → Talks & speaking engagements
            </Link>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Blog
