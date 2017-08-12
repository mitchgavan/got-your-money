import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Heading from './Heading'
import theme from '../theme'

const { colors } = theme

const Header = styled.div`
  background-color: ${colors.black};
  padding: 20px;
  color: ${colors.white};
`

const TextLink = styled(Link)`
  color: ${colors.white};
  padding: 10px;
  text-decoration: none;
`

export default () => (
  <Header>
    <Flex justify="space-between" align="center">
      <Box>
        <Heading size={2} m={1}>
          Got Your Money
        </Heading>
      </Box>
      <Box>
        <TextLink to="/">Home</TextLink>
        <TextLink to="/about">About</TextLink>
      </Box>
    </Flex>
  </Header>
)
