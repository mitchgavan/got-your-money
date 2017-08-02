import React from 'react'
import { Box } from 'grid-styled'
import Text from './Text'
import InlineText from './InlineText'
import Block from './Block'
import theme from '../theme'

const { colors } = theme

export default ({ id, title, cost }) => (
  <Box
    mb={2}
    px={[2, 1]}
    w={[1, 1, 1/2]}
  >
    <Block
      bg={colors.white}
      p={[ 1, 2 ]}
    >
      <Text fontSize={2}>
        {title} <InlineText color="blue">${cost}</InlineText>
      </Text>
    </Block>
  </Box>
)
