import React from 'react';

export default ({
  onClick
}) => (
  <form>
    <label>
      <span>Weekly income</span>
      <button
        onClick={onClick}
        type="button"
      >
        Add item
      </button>
    </label>
  </form>
);
