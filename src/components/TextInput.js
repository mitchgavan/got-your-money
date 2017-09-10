import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { Field } from 'redux-form'
import theme from '../theme'

const Label = styled.label`
  display: block;
  margin: 0;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.8;
  color: #0a0a0a;
`

const InputField = styled(Field)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border: 1px solid #cacaca;
  background-color: ${theme.colors.white};
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: ${theme.colors.black};
  transition: box-shadow 0.5s ease-in-out;
  appearance: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export default ({
  name,
  displayName
}) => (
  <Label>
    {displayName}
    <InputField
      name={name}
      component="input"
      type="text"
    />
  </Label>
)
