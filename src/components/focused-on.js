import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function FocusedOn() {
  return (
    <section id="focused-on" aria-label="What I'm focused on right now">
      <Fade>
        <Container>
          <h2 aria-level="2">What I'm focused on right now</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Helping early-stage founders untangle technical debt and unclear architecture</li>
            <li>Advising teams who've moved fast and want to stabilize what they've built</li>
            <li>Writing and speaking about sustainable engineering, decision-making, and systems that support people (not just growth)</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Updated December 2025.
          </p>
        </Container>
      </Fade>
    </section>
  )
}

export default FocusedOn

