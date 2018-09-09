import React from 'react'
import { format } from 'date-fns'
import { Box } from 'grid-styled'
import Text from './Text'
import InlineText from './InlineText'
import Block from './Block'
import ButtonLink from './ButtonLink'
import theme from '../theme'

const { colors } = theme

export default ({ title, cost, date, onClick, isBeingDeleted }) => (
  <Box mb={2} px={[2, 1]} w={[1, 1, 1 / 2]}>
    <Block bg={colors.white} p={[1, 2]}>
      <Text fontSize={2}>
        {title} <InlineText color="blue">${cost}</InlineText>
      </Text>
      <Text fontSize={1}>{format(date, 'dd/MM/yyyy')}</Text>
      <ButtonLink onClick={onClick}>Edit</ButtonLink>
    </Block>
  </Box>
)
