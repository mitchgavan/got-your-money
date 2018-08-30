import React from 'react'
import { map } from 'ramda'
import { Flex } from 'grid-styled'
import { Redirect } from 'react-router-dom'
import WeeklySummary from './WeeklySummary'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Container from '../../components/Container'
import Text from '../../components/Text'
import ExpenseTotal from './ExpenseTotal'
import Button from '../../components/Button'

export default class Home extends React.Component {
  state = {
    itemBeingRemoved: null,
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  handleClick = id => {
    // this.setState({ itemBeingRemoved: id })
    this.props.goToItem(id)
  }

  renderExpenses() {
    if (this.props.isFetching) {
      return (
        <Text fontSize={2} m={1}>
          Loading...
        </Text>
      )
    }

    if (!this.props.visibleItems.length) {
      return (
        <Text fontSize={2} m={1}>
          {this.props.isApiError ? 'Something went wrong' : 'No expenses found'}
        </Text>
      )
    }

    return (
      <Flex wrap="wrap">
        {map(
          item => (
            <ExpenseItem
              key={item.id}
              isBeingDeleted={
                this.props.isDeletingItem &&
                item.id === this.state.itemBeingRemoved
              }
              onClick={() => this.handleClick(item.id)}
              {...item}
            />
          ),
          this.props.visibleItems
        )}
      </Flex>
    )
  }

  render() {
    if (!this.props.authentication.isAuthenticated) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <ExpenseTotal total={this.props.itemsTotalCostForCurrentWeek} />
        <Container>
          <WeeklySummary startOfWeek={this.props.date.startOfWeek} />
          <Flex p={3} justifyContent="center">
            <ButtonLink onClick={this.props.goToAddItem} bg="green">
              Add a new expense
            </ButtonLink>
          </Flex>
          {this.renderExpenses()}
          <Flex p={3} justifyContent="space-between">
            <Button onClick={this.props.previousWeek}>Last Week</Button>
            <Button onClick={this.props.nextWeek}>Next Week</Button>
          </Flex>
        </Container>
      </div>
    )
  }
}
