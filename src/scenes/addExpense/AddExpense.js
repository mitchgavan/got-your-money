import React from 'react'
import Container from '../../components/Container'
// import Button from '../../components/Button'
import ExpenseForm from './ExpenseForm'

// TODO move these
// const itemCoffee = {
//   id: uuidv1(),
//   title: 'Coffee',
//   cost: 4
// }

// const itemDinner = {
//   id: uuidv1(),
//   title: 'Dinner',
//   cost: 23
// }

export default ({
  addItem,
  // goToHome,
  isPosting
}) => (
  <Container p={2}>
    {/* <Button
      onClick={() => {
        addItem(itemCoffee)
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Coffee
    </Button>
    <Button
      onClick={() => {
        addItem(itemDinner)
        goToHome && goToHome()
      }}
      type="button"
      bg="green"
    >
      Dinner
    </Button> */}
    <ExpenseForm onSubmit={addItem} isPosting={isPosting} />
  </Container>
)
