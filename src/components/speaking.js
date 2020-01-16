import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`

const TitleText = styled.span`
  color: ${props => props.theme.primary};
`

function Engagement({ title, conference, url }) {
  return (
    <Wrapper>
      <Title>
        {url ? <a href={url}>{title}</a> : <TitleText>{title}</TitleText>}
      </Title>
      <p>{conference}</p>
    </Wrapper>
  )
}

function mapDataToProps(data) {
  const fromGraphQL = data.allAirtable.edges
  const appearances = _.flatten(
    fromGraphQL.map(({ node }) => {
      const { Name, Date: date, Talks, Published } = node.data
      const conference = Published ? Name : "To be announced..."
      return Talks.map(({ data }) => {
        const { Name: title, Recording } = data
        let url = ""
        if (Recording && Recording.length > 0) {
          url = Recording[0].data.URL
        }
        return {
          conference,
          date,
          title,
          url,
        }
      })
    })
  )

  return { appearances }
}

function Speaking() {
  return (
    <StaticQuery
      query={speakingEngagementsQuery}
      render={data => {
        const { appearances } = mapDataToProps(data)
        const today = new Date()
        const upcoming = appearances.filter(
          ({ date }) => new Date(date) >= today
        )
        const past = appearances.filter(({ date }) => new Date(date) < today)

        return (
          <section id="speaking">
            <Fade>
              <Container>
                <h2>Appearances</h2>
                {upcoming.length > 0 && <h3>Upcoming</h3>}
                {upcoming.map((data, i) => (
                  <Engagement key={i} {...data} />
                ))}
                <h3>Past</h3>
                {past.map((data, i) => (
                  <Engagement key={i} {...data} />
                ))}
              </Container>
            </Fade>
          </section>
        )
      }}
    />
  )
}

const speakingEngagementsQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Conferences" } }
      sort: { fields: data___Date, order: DESC }
    ) {
      edges {
        node {
          data {
            Name
            Date
            Published
            Talks {
              data {
                Name
                Recording {
                  data {
                    URL
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Speaking
