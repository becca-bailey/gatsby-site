import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const SiteTitle = styled.h1`
  font-size: ${rhythm(1.25)};
  text-transform: lowercase;
  margin: 0;
`

const NavigationLink = styled.span`
  text-transform: lowercase;
  padding-right: 1rem;
`

class Navigation extends React.Component {
  render() {
    const { title } = this.props
    return (
      <NavigationContainer>
        <SiteTitle>
          <Link to="/">{title}</Link>
        </SiteTitle>
        <span>
          <NavigationLink>
            <a href="#about">About</a>
          </NavigationLink>
          <NavigationLink>
            <a href="#speaking">Speaking</a>
          </NavigationLink>
          <NavigationLink>
            <a href="#blog">Writing</a>
          </NavigationLink>
        </span>
      </NavigationContainer>
    )
  }
}

export default Navigation
