import React from 'react'
import styled from 'styled-components'
import uuidv1 from 'uuid/v1'
import Text from './Text'
import Button from './Button'

const Form = styled.form`
  text-align: center;
`

export default ({ onAddClick }) => (
  <Form>
    <Text fontSize={3}>Stuff paid for this week</Text>
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
