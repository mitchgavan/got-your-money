import React from 'react';
import { map } from 'ramda'

import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Box from '../../components/Box'

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({ changePage, addItem, removeItem, items }) => (
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
  </div>
)
