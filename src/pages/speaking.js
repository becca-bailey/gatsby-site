import { graphql } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../utils/theme"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { small } from "../utils/breakpoints"

function mapDataToProps(data) {
  const fromGraphQL = data.allAirtable.edges
  const talks = fromGraphQL.map(({ node }) => {
    const { data, id: talkId } = node
    const {
      Name,
      Tags,
      Abstract,
      Description,
      Workshop,
      Resources,
      Conferences,
    } = data
    let resources = []
    if (Resources) {
      resources = Resources.map(({ id: resourceId, data }) => {
        const { URL, Type } = data
        return { type: Type, url: URL, id: resourceId }
      })
    }
    let presentations = []
    if (Conferences) {
      presentations = Conferences.map(({ data, id: conferenceId }) => {
        const { Name, Date, Recordings, Published } = data
        let url
        if (Recordings && Recordings.length > 0) {
          url = Recordings[0].data.URL
        }
        const name = Published ? Name : "To be announced..."
        return {
          id: conferenceId,
          date: Date,
          name,
          url,
        }
      })
    }
    return {
      id: talkId,
      name: Name,
      tags: Tags,
      abstract: Abstract,
      description: Description,
      isWorkshop: Workshop,
      resources,
      presentations,
    }
  })
  return { talks }
}

const TalkContainer = styled.div`
  margin-bottom: ${rhythm(2)};
  @media (min-width: ${small}) {
    background-color: ${theme.background.lighten(0.03)};
    border: 1px solid ${theme.background.darken(0.1)};
    border-radius: 4px;
    padding: ${rhythm(1)};
    margin-bottom: ${rhythm(1)};
  }
`

function Talk({ name, abstract, isWorkshop, resources, presentations }) {
  return (
    <TalkContainer>
      <h2>
        {name}
        {isWorkshop && " (Workshop)"}
      </h2>
      <p>{abstract}</p>
      {presentations.length > 0 && (
        <>
          <h3>Presentations</h3>
          <ul>
            {presentations.map(({ url, name, id }) => {
              return <li key={id}>{url ? <a href={url}>{name}</a> : name}</li>
            })}
          </ul>
        </>
      )}
      {resources.length > 0 && (
        <>
          <h3>Resources</h3>
          <ul>
            {resources.map(({ url, type, id }) => {
              return (
                <li key={id}>
                  <a href={url}>{type}</a>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </TalkContainer>
  )
}

class Talks extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { talks } = mapDataToProps(data)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Talks"
          keywords={[`speaking`, `conferences`, `talks`, `react`]}
        />
        <Container small>
          <Fade cascade>
            {talks.map(({ id, ...talk }) => (
              <Talk key={id} {...talk}></Talk>
            ))}
          </Fade>
        </Container>
      </Layout>
    )
  }
}

export default Talks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allAirtable(
      filter: { table: { eq: "Talks" } }
      sort: { fields: data___Year, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            Name
            Tags
            Abstract
            Description
            Workshop
            Year
            Resources {
              id
              data {
                Type
                URL
              }
            }
            Conferences {
              id
              data {
                Name
                Date
                Published
                Recordings {
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
