import React from 'react'
import Block from '../Block'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import theme from '../../theme'

it('renders correctly', () => {
  const wrapper = shallow(<Block color="red" bg="white" />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  const wrapper = shallow(
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
  expect(toJson(wrapper)).toHaveStyleRule(
    'color',
    expect.stringContaining('red')
  )
  expect(toJson(wrapper)).toHaveStyleRule(
    'background-color',
    theme.colors.white
  )
  expect(toJson(wrapper)).toHaveStyleRule('padding', theme.space[2] + 'px')
  expect(toJson(wrapper)).toHaveStyleRule(
    'font-size',
    theme.fontSizes[2] + 'px'
  )
  expect(toJson(wrapper)).toHaveStyleRule('text-align', 'center')
  expect(toJson(wrapper)).toHaveStyleRule('width', '200px')
})
