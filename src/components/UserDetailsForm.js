import React from 'react';

export default ({
  onClick
}) => (
  <form>
    <label>
      <span>Stuff paid for this week</span>
      <button
        onClick={() => onClick('Dinner', 23)}
        type="button"
      >
        Add item
      </button>
    </label>
  </form>
);
