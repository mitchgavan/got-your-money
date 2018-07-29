import React, { Component } from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import theme from '../theme'
import Block from './Block'

const Label = styled.label`
  display: block;
  position: relative;
  margin: 0;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.8;
  color: #0a0a0a;
`

const InputField = styled.input`
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
  font-size: ${props => (props.isActive ? '11px' : '14px')}
  top: ${props => (props.isActive ? '-20px' : '8px')};
`

export default class TextInput extends Component {
  state = {
    isActive: false,
  }

  componentDidMount() {
    this.setState({
      isActive: Boolean(this.props.value),
    })
  }

  handleBlur = event => {
    if (!event.target.value) {
      this.setState({ isActive: false })
    }
  }

  handleFocus = event => {
    this.setState({ isActive: true })
  }

  render() {
    return (
      <Block pt={2} pb={1}>
        <Label>
          <LabelText isActive={this.state.isActive}>
            {this.props.displayName}
          </LabelText>
          <InputField
            name={this.props.name}
            type="text"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.props.value || ''}
            onChange={this.props.onChange}
          />
        </Label>
      </Block>
    )
  }
}
