import React from 'react'
import Container from '../../components/Container'

const NoMatch = ({ location }) => (
  <Container p={4}>
    <p>No match for {location.pathname} found</p>
  </Container>
)

export default NoMatch
