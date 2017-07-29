import React from 'react';

export default ({ onAddClick, onRemoveClick }) => (
  <form>
    <label>
      <span>Stuff paid for this week</span>
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
