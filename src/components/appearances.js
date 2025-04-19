import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"
import { Fade } from "react-swift-reveal"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"

const LIMIT = 5

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`

const TitleText = styled.span`
  color: ${(props) => props.theme.primary};
`

const Tag = styled.span`
  line-height: 1rem;
  font-family: Rubik;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray};
  padding ${rhythm(1 / 6)};
  margin-left: ${rhythm(1 / 3)};
`

function Conference({ title, conference, url }) {
  return (
    <Wrapper>
      <Title>
        {url ? <a href={url}>{title}</a> : <TitleText>{title}</TitleText>}
      </Title>
      <p>{conference}</p>
    </Wrapper>
  )
}

function Podcast({ podcast, name, url }) {
  return (
    <Wrapper>
      <Title>
        {url ? <a href={url}>{name}</a> : <TitleText>{name}</TitleText>}
      </Title>
      <p>
        {podcast}
        <Tag>podcast</Tag>
      </p>
    </Wrapper>
  )
}

const components = {
  conference: Conference,
  podcast: Podcast,
}

function Appearance({ type, ...rest }) {
  const Component = components[type]
  return <Component {...rest} />
}

function mapDataToProps(data) {
  const fromGraphQL = data.allAirtable.edges
  const appearances = _.flatten(
    fromGraphQL.map(({ node }) => {
      const { table, data, id } = node
      const { Name, Date: date, Talks, Published } = data
      if (table === "Conferences") {
        const conference = Published ? Name : "To be announced..."
        return Talks.map(({ data, id: talkId }) => {
          const { Name: title, Recording } = data
          let url = ""
          if (Recording && Recording.length > 0) {
            url = Recording[0].data.URL
          }
          return {
            type: "conference",
            id: talkId,
            conference,
            date,
            title,
            url,
          }
        })
      } else if (table === "Podcasts") {
        const { Name: name, Podcast: podcast, URL: url, Date: date } = data
        return {
          type: "podcast",
          name,
          podcast,
          id,
          url,
          date,
        }
      }
      return {}
    })
  )

  // The size will always be consistent, even with flattened talks
  return { appearances: _.take(appearances, LIMIT) }
}

function Appearances() {
  return (
    <StaticQuery
      query={speakingEngagementsQuery}
      render={(data) => {
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
                {upcoming.map(({ id, ...data }) => (
                  <Appearance key={id} {...data} />
                ))}
                <h3>Past</h3>
                {past.map(({ id, ...data }) => (
                  <Appearance key={id} {...data} />
                ))}
                <a href="/speaking">View all →</a>
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
      limit: 5
      filter: { table: { in: ["Conferences", "Podcasts"] } }
      sort: { fields: data___Date, order: DESC }
    ) {
      edges {
        node {
          id
          table
          data {
            URL
            Name
            Date
            Published
            Podcast
            Talks {
              id
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

export default Appearances
