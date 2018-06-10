import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import Text from '../../components/Text'
import Block from '../../components/Block'
import HeadingSmall from '../../components/HeadingSmall'
import theme from '../../theme'

const { colors } = theme

const BlockGradient = styled(Block)`
  background: #ff8008;
  background: linear-gradient(to right, #ff8008, #ffc837);
  text-align: center;
`

export default ({ total }) => (
  <Box mb={2}>
    <BlockGradient p={[4, 5]}>
      <HeadingSmall
        fontSize={1}
        color={colors.white}
        mb={2}
      >
        Total Expenses
      </HeadingSmall>
      <Text
        fontSize={5}
        color={colors.white}
        m={1}
      >
        ${total.toFixed(2)}
      </Text>
    </BlockGradient>
  </Box>
)
