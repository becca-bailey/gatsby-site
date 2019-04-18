import styled from "styled-components"
import { rhythm } from "../utils/typography"
import theme from "../utils/theme"

export const Field = styled.div`
  display: block;
  padding-bottom: ${rhythm(0.75)};
  max-width: ${rhythm(20)};
  margin: auto;
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
