import React from 'react'
import styled from 'styled-components'
import { compose } from 'ramda'
import addDays from 'date-fns/fp/addDays'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import uuidv1 from 'uuid/v1'
import Text from './Text'
import Button from './Button'

const Form = styled.form`
  text-align: center;
`

const formatDate = formatWithOptions({}, 'EEE d MMMM yyyy')

const formatEndOfWeekDate = compose(
  formatDate,
  addDays(6)
)

export default ({ onAddClick, startOfWeek }) => (
  <Form>
    <Text fontSize={3}>Stuff paid for this week</Text>
    <Text fontSize={2}>
      Current week: {formatDate(startOfWeek)} - {formatEndOfWeekDate(startOfWeek)}
    </Text>
    <Button
      onClick={() => onAddClick({
        title: 'Dinner', 
        cost: 23.7, 
        id: uuidv1()
      })}
      type="button"
      bg="green"
    >
      Add item
    </Button>
  </Form>
)
