import React from 'react';
import { compose, map, pluck, sum } from 'ramda'

import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Box from '../../components/Box'
import Text from '../../components/Text'

const getTotalCost = compose(sum, pluck('cost'))

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({
  changePage,
  addItem,
  removeItem, 
  items
}) => (
  <div>
    <Box p={3}>
      <ButtonLink onClick={() => changePage()}>
        Go to about page via redux
      </ButtonLink>
    </Box>
    <UserDetailsForm
      onAddClick={addItem}
      onRemoveClick={removeItem}
    />
    {map(renderItems, items)}
    <Text>
      Total: ${getTotalCost(items).toFixed(2)}
    </Text>
  </div>
)
