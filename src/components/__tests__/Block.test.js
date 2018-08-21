import React from 'react'
import Block from '../Block'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

it('renders correctly', () => {
  const wrapper = shallow(<Block color="red" bg="white" />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
