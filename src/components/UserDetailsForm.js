import React from 'react';
import styled from 'styled-components'
import { fontSize, color } from 'styled-system'

import Text from './Text'

export default ({ onAddClick, onRemoveClick }) => (
  <form>
    <label>
      <Text fontSize={4}>Stuff paid for this week</Text>
      <button
        onClick={() => onAddClick('Dinner', 23)}
        type="button"
      >
        Add item
      </button>
      <button
        onClick={() => onRemoveClick(1)}
        type="button"
      >
        Remove item
      </button>
    </label>
  </form>
);
