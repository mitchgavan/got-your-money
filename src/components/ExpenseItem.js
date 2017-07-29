import React from 'react';

export default ({
  id,
  title,
  cost
}) => (
  <div>
    <h3>{title} <span>{cost}</span></h3>
  </div>
);
