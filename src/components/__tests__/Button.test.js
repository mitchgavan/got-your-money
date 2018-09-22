import React from 'react'
import Button from '../Block'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

it('renders correctly', () => {
  const wrapper = shallow(<Button />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
