import React from 'react'

import Text from './Text'
import Button from './Button'


export default ({ onAddClick, onRemoveClick }) => (
  <form>
    <label>
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
    </label>
  </form>
);
