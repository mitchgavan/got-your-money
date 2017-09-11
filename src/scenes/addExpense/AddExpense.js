import React from 'react';
import uuidv1 from 'uuid/v1'
import Container from '../../components/Container'
import Button from '../../components/Button'
import ExpenseForm from './ExpenseForm'

// TODO move these
const itemCoffee = {
  title: 'Coffee',
  cost: 4
}

const itemDinner = {
  title: 'Dinner',
  cost: 23
}

export default ({
  addItem,
  goToHome,
}) => (
  <Container p={2}>
    <Button
      onClick={() => {
        addItem(itemCoffee, uuidv1())
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Coffee
    </Button>
    <Button
      onClick={() => {
        addItem(itemDinner, uuidv1())
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Dinner
    </Button>
    <ExpenseForm onSubmit={addItem} />
  </Container>
)
