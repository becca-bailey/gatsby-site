import React from "react"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"

const LIMIT = 5

function Conference({ title, conference, url }) {
  return (
    <div className="mb-[16.625px]" role="listitem">
      <h3 className="mb-[8.31px]">
        {url ? (
          <a href={url} aria-label={`View details about ${title}`}>
            {title}
          </a>
        ) : (
          <span className="text-primary">{title}</span>
        )}
      </h3>
      <p>{conference}</p>
    </div>
  )
}

function Podcast({ podcast, name, url }) {
  return (
    <div className="mb-[16.625px]" role="listitem">
      <h3 className="mb-[8.31px]">
        {url ? (
          <a href={url} aria-label={`Listen to ${name} on ${podcast}`}>
            {name}
          </a>
        ) : (
          <span className="text-primary">{name}</span>
        )}
      </h3>
      <p>
        {podcast}
        <span className="leading-4 font-header text-xs rounded-[4px] bg-gray py-[5.54px] ml-[11.08px]">
          podcast
        </span>
      </p>
    </div>
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
          <section id="speaking" aria-label="Speaking engagements">
            <Fade>
              <Container>
                <h2 aria-level="2">Appearances</h2>
                {upcoming.length > 0 && (
                  <>
                    <h3 aria-level="3">Upcoming</h3>
                    <div role="list" aria-label="Upcoming appearances">
                      {upcoming.map(({ id, ...data }) => (
                        <Appearance key={id} {...data} />
                      ))}
                    </div>
                  </>
                )}
                <h3 aria-level="3">Past</h3>
                <div role="list" aria-label="Past appearances">
                  {past.map(({ id, ...data }) => (
                    <Appearance key={id} {...data} />
                  ))}
                </div>
                <a href="/speaking" aria-label="View all speaking engagements">
                  View all →
                </a>
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
      sort: { data: { Date: DESC } }
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
