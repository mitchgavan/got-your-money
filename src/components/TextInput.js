import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { Field } from 'redux-form'
import { compose, withState, withHandlers } from 'recompose';
import theme from '../theme'

const Label = styled.label`
  display: block;
  position: relative;
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
  border: 0;
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

const LabelText = styled.span`
  position: absolute;
  display: block;
  left: 10px;
  font-size: 14px;
  top: ${props => props.isActive ? '-20px' : '8px'};
`

const withToggle = compose(
  withState('isActive', 'setActive', false),
  withHandlers({
    onFocus: props => event => {
      props.setActive(true)
    },
    onBlur: props => event => {
      if (!event.target.value) {
        props.setActive(false)
      }
    }
  })
)

export default withToggle(({
  name,
  displayName,
  onFocus,
  onBlur,
  isActive
}) => (
  <Label>
    <LabelText isActive={isActive}>
      {displayName}
    </LabelText>
    <InputField
      name={name}
      component="input"
      type="text"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </Label>
))
