import React from 'react';
import { compose, map, pluck, sum } from 'ramda'
import { Box, Flex } from 'grid-styled'
import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Container from '../../components/Container'
import ExpenseTotal from './ExpenseTotal'

const getTotalCost = compose(sum, pluck('cost'))

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({
  goToAddItem,
  addItem,
  removeItem,
  items
}) => (
  <div>
    <ExpenseTotal total={getTotalCost(items).toFixed(2)} />
    <Container>
      <UserDetailsForm
        onAddClick={addItem}
        onRemoveClick={removeItem}
      />
      <Flex wrap="wrap">
        {map(renderItems, items)}
      </Flex>
      <Box p={3}>
        <ButtonLink onClick={goToAddItem}>
          Add a new expense
        </ButtonLink>
      </Box>
    </Container>
  </div>

)
