import styled from "styled-components"
import { rhythm } from "../utils/typography"
import theme from "../utils/theme"

const Button = styled.button`
  color: ${theme.white};
  background-color: ${theme.primary};
  border: none;
  padding: ${rhythm(0.25)};
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: ${theme.primary.darken(0.2)};
  }
`

export default Button
