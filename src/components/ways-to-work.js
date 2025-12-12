import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function WaysToWork() {
  return (
    <section id="ways-to-work" aria-label="Ways to work together">
      <Fade>
        <Container>
          <h2 aria-level="2">Ways we might work together</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Technical diagnostic sprints to identify what's working, what's fragile, and what matters most</li>
            <li>Fixed-scope implementation projects with clear outcomes and clear boundaries</li>
            <li>Advisory sessions for architecture decisions, code reviews, and prioritization</li>
          </ul>
          <p className="mb-4">
            I work in short, well-defined engagements rather than open-ended freelancing.
          </p>
          <Link
            to="/work-with-me"
            className="inline-block text-primary font-medium hover:underline"
          >
            Learn more on Work With Me →
          </Link>
        </Container>
      </Fade>
    </section>
  )
}

export default WaysToWork

