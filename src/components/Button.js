import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

export default styled.button`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 100em;
  font-size: 0.9rem;
  line-height: 1;
  text-align: center;
  background-color: #1779ba;
  color: #fefefe;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  -webkit-appearance: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
