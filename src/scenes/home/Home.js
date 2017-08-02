import React from 'react';
import { compose, map, pluck, sum } from 'ramda'
import { Box, Flex } from 'grid-styled'
import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Text from '../../components/Text'
import Container from '../../components/Container'

const getTotalCost = compose(sum, pluck('cost'))

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({
  changePage,
  addItem,
  removeItem,
  items
}) => (
  <Container>
    <Box p={3}>
      <ButtonLink onClick={() => changePage()}>
        Go to about page via redux
      </ButtonLink>
    </Box>
    <UserDetailsForm
      onAddClick={addItem}
      onRemoveClick={removeItem}
    />
    <Flex wrap="wrap">
      {map(renderItems, items)}
    </Flex>
    <Text>
      Total: ${getTotalCost(items).toFixed(2)}
    </Text>
  </Container>
)
