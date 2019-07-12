import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const speakingEngagements = [
  {
    id: 1,
    title: "JavaScript Survival Skills",
    conference: "RVA JavaScript",
    date: "November 2018",
    url: "https://www.youtube.com/watch?v=gD88CtfzkWQ&t=2s",
  },
  {
    id: 2,
    title: "JavaScript Survival Skills",
    conference: "Chicago JS Camp",
    date: "September 2018",
  },
  {
    id: 3,
    title: "Beyond the WAT: Why Component Design Still Matters",
    conference: "Fullstack JS London",
    date: "July 2019",
    url:
      "https://skillsmatter.com/skillscasts/13877-beyond-the-wat-why-good-component-design-still-matters",
  },
]

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`

function Speaking() {
  return (
    <section id="speaking">
      <Fade>
        <Container>
          <h2>Speaking</h2>
          {speakingEngagements.map(({ title, conference, date, url, id }) => (
            <Wrapper key={id}>
              <Title>
                <a href={url}>{`${title} - ${conference}`}</a>
              </Title>
              <small>{date}</small>
            </Wrapper>
          ))}
        </Container>
      </Fade>
    </section>
  )
}

export default Speaking
