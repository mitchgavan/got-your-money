import React from 'react';
import styled from 'styled-components'
import { fontSize, color } from 'styled-system'

import Text from './Text'
import Button from './Button'

export default ({ onAddClick, onRemoveClick }) => (
  <form>
    <label>
      <Text fontSize={4}>Stuff paid for this week</Text>
      <Button
        onClick={() => onAddClick('Dinner', 23)}
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
