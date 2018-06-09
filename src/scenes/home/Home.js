import React from 'react';
import { compose, map, pluck, sum } from 'ramda'
import { Box, Flex } from 'grid-styled'
import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Container from '../../components/Container'
import ExpenseTotal from './ExpenseTotal'

const getTotalCost = compose(sum, pluck('cost'))

export default class Home extends React.Component {

  handleRemoveClick = id => this.props.removeItem({ id })

  render() {
    return (
        <div>
          <ExpenseTotal total={getTotalCost(this.props.items).toFixed(2)} />
          <Container>
            <UserDetailsForm
              onAddClick={this.props.addItem}
              onRemoveClick={this.props.removeItem}
            />
            <Flex wrap="wrap">
              {map(item => (
                <ExpenseItem
                  key={item.id}
                  onRemoveClick={() => this.handleRemoveClick(item.id)}
                  {...item}
                />
              ), this.props.items)}
            </Flex>
            <Box p={3}>
              <ButtonLink onClick={this.props.goToAddItem}>
                Add a new expense
              </ButtonLink>
            </Box>
          </Container>
        </div>
    )
  }
}
