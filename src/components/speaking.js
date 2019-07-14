import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import { format } from "date-fns"

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`

function getFormattedDate(isoStringDate) {
  return format(new Date(isoStringDate), "MMMM D, YYYY")
}

function Speaking() {
  return (
    <StaticQuery
      query={speakingEngagementsQuery}
      render={data => (
        <section id="speaking">
          <Fade>
            <Container>
              <h2>Speaking</h2>
              {data.allSpeakingJson.edges.map(({ node }, i) => {
                const { title, conference, date, url } = node
                return (
                  <Wrapper key={i}>
                    <Title>
                      <a href={url}>{`${title} - ${conference}`}</a>
                    </Title>
                    <small>{getFormattedDate(date)}</small>
                  </Wrapper>
                )
              })}
            </Container>
          </Fade>
        </section>
      )}
    />
  )
}

const speakingEngagementsQuery = graphql`
  query SpeakingEngagementsQuery {
    allSpeakingJson {
      edges {
        node {
          title
          conference
          date
          url
        }
      }
    }
  }
`

export default Speaking
