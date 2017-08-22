import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Button from './Button'

const Form = styled.form`
  text-align: center;
`

export default ({ onAddClick, onRemoveClick }) => (
  <Form>
    <Text fontSize={3}>Stuff paid for this week</Text>
    <Button
      onClick={() => onAddClick('Dinner', 23.7)}
      type="button"
      bg="green"
    >
      Add item
    </Button>
    <Button
      onClick={() => onRemoveClick(1)}
      type="button"
    >
      Remove item
    </Button>
  </Form>
);
