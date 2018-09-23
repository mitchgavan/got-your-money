import React from 'react'
import Block from '../Block'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import theme from '../../theme'

let component

beforeEach(() => {
  component = shallow(
    <Block
      theme={theme}
      color="red"
      bg="white"
      p={2}
      fontSize={2}
      textAlign="center"
      width={200}
    />
  )
})

it('renders correctly', () => {
  expect(toJson(component)).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  expect(component).toHaveStyleRule('color', expect.stringContaining('red'))
  expect(component).toHaveStyleRule('background-color', theme.colors.white)
  expect(component).toHaveStyleRule('padding', theme.space[2] + 'px')
  expect(component).toHaveStyleRule('font-size', theme.fontSizes[2] + 'px')
  expect(component).toHaveStyleRule('text-align', 'center')
  expect(component).toHaveStyleRule('width', '200px')
})
