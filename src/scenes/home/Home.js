import React from 'react'
import { map } from 'ramda'
import { Flex } from 'grid-styled'
import WeeklySummary from './WeeklySummary'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Container from '../../components/Container'
import Text from '../../components/Text'
import ExpenseTotal from './ExpenseTotal'
import Button from '../../components/Button';

export default class Home extends React.Component {

  componentDidMount() {
    this.props.fetchItems()
  }

  handleRemoveClick = id => this.props.removeItem({ id })

  renderExpenses() {
    if (this.props.isFetching) {
      return (
        <Text
          fontSize={2}
          m={1}>
          Loading...
        </Text>
      )
    }

    if (!this.props.visibleItems) {
      return (
        <Text
          fontSize={2}
          m={1}>
          No expenses found
        </Text>
      )
    }

    return (
      <Flex wrap="wrap">
        {map(item => (
          <ExpenseItem
            key={item._id}
            onRemoveClick={() => this.handleRemoveClick(item._id)}
            {...item}
          />
        ), this.props.visibleItems)}
      </Flex>
    )
  }

  render() {
    return (
      <div>
        <ExpenseTotal
          total={this.props.itemsTotalCostForCurrentWeek} 
        />
        <Container>
          <WeeklySummary startOfWeek={this.props.date.startOfWeek} />
          <Flex p={3} justifyContent='center'>
            <ButtonLink onClick={this.props.goToAddItem}>
              Add a new expense
            </ButtonLink>
          </Flex>
          {this.renderExpenses()}
          <Flex p={3} justifyContent='space-between'>
            <Button onClick={this.props.previousWeek}>
              Last Week
            </Button>
            <Button onClick={this.props.nextWeek}>
              Next Week
            </Button>
          </Flex>
        </Container>
      </div>
    )
  }
}
