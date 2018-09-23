import React from 'react'
import Button from '../Block'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import theme from '../../theme'

let component

beforeEach(() => {
  component = shallow(
    <Button
      theme={theme}
      color="white"
      bg="blue"
      p={2}
      fontSize={3}
      textAlign="center"
      width={200}
    />
  )
})

it('renders correctly', () => {
  expect(toJson(component)).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  expect(component).toHaveStyleRule('color', theme.colors.white)
  expect(component).toHaveStyleRule('background-color', theme.colors.blue)
  expect(component).toHaveStyleRule('padding', theme.space[2] + 'px')
  expect(component).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
  expect(component).toHaveStyleRule('width', '200px')
})
