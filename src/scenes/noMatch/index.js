import React from 'react'
import Block from '../../components/Block'

const NoMatch = ({ location }) => (
  <Block p={4}>
    <p>No match for {location.pathname} found</p>
  </Block>
)

export default NoMatch
