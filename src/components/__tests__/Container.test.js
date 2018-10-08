import React from 'react'
import Container from '../Container'
import { mount } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import theme from '../../theme'

let component

beforeEach(() => {
  component = mount(
    <Container
      theme={theme}
      flex="1 1 auto"
      p={2}
      mb={2}
      width={[1 / 2, 1 / 3, 1 / 4]}
    />
  )
})

it('renders correctly', () => {
  expect(toJson(component)).toMatchSnapshot()
})

test('it applies styles according to passed props', () => {
  expect(component).toHaveStyleRule('flex', '1 1 auto')
  expect(component).toHaveStyleRule('padding', theme.space[2] + 'px')
  expect(component).toHaveStyleRule('margin-bottom', theme.space[2] + 'px')
  expect(component).toHaveStyleRule('width', '50%')
})
