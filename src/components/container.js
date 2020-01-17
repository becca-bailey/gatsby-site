import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Container = styled.div`
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
  max-width: ${props => (props.small ? rhythm(28) : rhythm(32))};
  margin: auto;
`
export default Container
