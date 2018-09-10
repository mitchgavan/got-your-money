import React from 'react'
import { compose } from 'ramda'
import addDays from 'date-fns/fp/addDays'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import Text from '../../components/Text'
import Block from '../../components/Block'

const formatDate = formatWithOptions({}, 'EEE d MMMM')

const formatEndOfWeekDate = compose(
  formatDate,
  addDays(6)
)

export default ({ startOfWeek }) => (
  <Block textAlign="center">
    <Text fontSize={3}>Stuff paid for this week</Text>
    <Text fontSize={2}>
      Current week: {formatDate(startOfWeek)} -{' '}
      {formatEndOfWeekDate(startOfWeek)}
    </Text>
  </Block>
)
