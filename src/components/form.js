import styled from "styled-components"
import { rhythm } from "../utils/typography"
import theme from "../utils/theme"
import { small } from "../utils/breakpoints"

export const Field = styled.div`
  display: block;
  padding-bottom: ${rhythm(0.75)};
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${theme.gray};
  border-radius: 5px;
  padding: ${rhythm(0.25)};
`

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid ${theme.gray};
  border-radius: 4px;
  padding: ${rhythm(0.25)};
  min-height: ${rhythm(4)};
`
export const Form = styled.form`
  @media (min-width: ${small}) {
    max-width: ${rhythm(20)};
    margin: auto;
    background-color: ${theme.background.lighten(0.03)};
    border: 1px solid ${theme.background.darken(0.1)};
    border-radius: 4px;
    padding: ${rhythm(1)};
  }
`
