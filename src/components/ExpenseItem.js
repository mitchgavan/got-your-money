import React from 'react'
import Box from './Box'
import Text from './Text'
import InlineText from './InlineText'

export default ({ id, title, cost }) => (
  <Box m={[ 1, 2, 3 ]}>
    <Text fontSize={2}>
      {title} <InlineText color="blue">${cost}</InlineText>
    </Text>
  </Box>
)
