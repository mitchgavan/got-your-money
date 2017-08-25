import React from 'react';
import uuidv1 from 'uuid/v1'
import Button from '../../components/Button'

export default ({ addItem, goToHome }) => (
  <div>
    <Button
      onClick={() => {
        addItem('Coffee', 4, uuidv1())
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Coffee
    </Button>
    <Button
      onClick={() => {
        addItem('Dinner', 23.7, uuidv1())
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Dinner
    </Button>
  </div>
)
