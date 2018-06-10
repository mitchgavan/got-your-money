import React from 'react'
import styled from 'styled-components'
import uuidv1 from 'uuid/v1'
import Text from './Text'
import Button from './Button'

const Form = styled.form`
  text-align: center;
`

export default ({ onAddClick, startOfWeek }) => (
  <Form>
    <Text fontSize={3}>Stuff paid for this week</Text>
    <Text fontSize={2}>Current week: {startOfWeek}</Text>
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
