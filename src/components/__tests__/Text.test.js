import React from 'react'
import Text from '../Text'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import theme from '../../theme'

let component

beforeEach(() => {
  component = shallow(
    <Text
      theme={theme}
      color="black"
      p={2}
      fontSize={3}
      width={1 / 2}
      textAlign="center"
    />
  )
})

it('renders correctly', () => {
  expect(toJson(component)).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  expect(component).toHaveStyleRule('color', theme.colors.black)
  expect(component).toHaveStyleRule('width', '50%')
  expect(component).toHaveStyleRule('padding', theme.space[2] + 'px')
  expect(component).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
  expect(component).toHaveStyleRule('text-align', 'center')
})
