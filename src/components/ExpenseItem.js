import React from 'react'
import { Box } from 'grid-styled'
import Text from './Text'
import InlineText from './InlineText'
import Block from './Block'
import ButtonLink from './ButtonLink'
import theme from '../theme'

const { colors } = theme

export default ({
  id,
  title,
  cost,
  onRemoveClick
}) => (
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
      <ButtonLink onClick={() => onRemoveClick(id)}>
        Remove
      </ButtonLink>
    </Block>
  </Box>
)
