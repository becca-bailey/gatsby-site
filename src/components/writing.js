import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import Fade from "react-reveal/Fade"
import { format } from "date-fns"

function Blog() {
  return (
    <StaticQuery
      query={blogPreviewQuery}
      render={(data) => {
        const posts = data.allAirtable.edges
        return (
          <section id="blog">
            <Container>
              <h2>Writing</h2>
              <Fade cascade>
                {posts.map(({ node }) => {
                  const { id, data } = node
                  const {
                    Name: name,
                    Date: date,
                    URL: url,
                    Source: source,
                  } = data
                  const formattedDate = format(new Date(date), "MMMM do, yyyy")
                  return (
                    <div key={id}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: `none` }} to={url}>
                          {name}
                        </Link>
                      </h3>
                      <p>
                        {source} - {formattedDate}
                      </p>
                    </div>
                  )
                })}
              </Fade>
              <a href="/writing">View all →</a>
            </Container>
          </section>
        )
      }}
    />
  )
}

const blogPreviewQuery = graphql`
  {
    allAirtable(
      limit: 5
      filter: { table: { eq: "Writing" } }
      sort: { fields: data___Date, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            URL
            Name
            Date
            Source
          }
        }
      }
    }
  }
`

export default Blog
