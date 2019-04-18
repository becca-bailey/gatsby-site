import React from "react"
import { rhythm } from "../utils/typography"
import Navigation from "./navigation"
import styled, { ThemeProvider } from "styled-components"
import colors from "../utils/colors"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
`

const LayoutContainer = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }

  a:active {
    color: ${props => props.theme.secondary};
  }

  section:nth-child(even) {
    background-color: ${props => props.theme.background};
  }
`

const Footer = styled.footer`
  text-align: center;
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <ThemeProvider theme={colors}>
        <LayoutContainer>
          <Container>
            <Navigation title={title} />
          </Container>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </LayoutContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
