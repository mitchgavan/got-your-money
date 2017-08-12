import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import Text from '../../components/Text'
import Block from '../../components/Block'
import theme from '../../theme'

const { colors } = theme
const BlockGradient = styled(Block)`
  background: #ff8008;
  background: linear-gradient(to right, #ff8008, #ffc837);
`

export default ({ total }) => (
  <Box
    mb={2}
    w={[1, 1, 1/2]}
  >
    <BlockGradient
      p={[ 4, 4 ]}
    >
      <Text
        fontSize={2}
        color={colors.white}
        m={1}
      >
        Total Expenses
      </Text>
      <Text
        fontSize={4}
        color={colors.white}
        m={1}
      >
        ${total}
      </Text>
    </BlockGradient>
  </Box>
)
