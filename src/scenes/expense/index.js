import React from 'react'
import { Redirect } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { format, parse } from 'date-fns'
import {
  removeItem,
  updateItemRequest,
} from '../../store/expenses/expensesActions'
import { fetchItem } from '../../store/currentExpense/currentExpenseActions'
import Container from '../../components/Container'
import Block from '../../components/Block'
import TextInput from '../../components/TextInput'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import Text from '../../components/Text'
import ButtonLink from '../../components/ButtonLink'
import {
  makeGetItemById,
  getNumberOfItems,
} from '../../store/expenses/expensesSelectors'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'

class Expense extends React.Component {
  state = {
    submitted: false,
    title: '',
    cost: '',
    date: '',
  }

  componentDidMount() {
    if (this.props.expense) {
      this.populateFields()
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.expense && this.props.expense) {
      this.populateFields()
    }
  }

  populateFields = () => {
    const { title, cost, date } = this.props.expense
    this.setState({
      title,
      cost,
      date: format(date, 'dd/MM/yyyy'),
    })
  }

  handleRemoveClick = () => {
    const { expense, removeItem } = this.props
    removeItem(expense.id)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const parsedDate = parse(this.state.date, 'dd/MM/yyyy', new Date())

    this.props.updateItemRequest({
      id: this.props.expense.id,
      title: this.state.title,
      cost: this.state.cost,
      date: parsedDate,
    })

    this.setState({ submitted: true })
  }

  render() {
    const {
      expense,
      isDeleting,
      isFetching,
      isFetchError,
      isPosting,
      numberOfExpenses,
    } = this.props

    if (isFetching || (numberOfExpenses && expense && !this.state.title)) {
      return (
        <Container p={2}>
          <Text>Loading...</Text>
        </Container>
      )
    }

    if (isFetchError) {
      return (
        <Container p={2}>
          <Text>Error trying to load this expense.</Text>
        </Container>
      )
    }

    if (!expense) {
      return (
        <Container p={2}>
          <Text>This expense cannot be found.</Text>
        </Container>
      )
    }

    if (this.state.submitted && !isPosting) {
      return <Redirect to="/" />
    }

    return (
      <Container p={2}>
        <Heading>Update expense</Heading>
        <form onSubmit={this.handleSubmit}>
          <Block py={2}>
            <TextInput
              name="title"
              displayName="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <TextInput
              name="cost"
              displayName="Cost"
              value={this.state.cost}
              onChange={this.handleChange}
            />
            <TextInput
              name="date"
              displayName="Date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <Button type="submit">{isPosting ? 'updating' : 'update'}</Button>
          </Block>
        </form>
        <ButtonLink onClick={this.handleRemoveClick}>
          {isDeleting ? 'Removing...' : 'Remove'}
        </ButtonLink>
      </Container>
    )
  }
}

const makeMapStateToProps = () => {
  const getBarState = makeGetItemById()
  return (state, props) => ({
    expense: getBarState(state, props.match.params.id),
    numberOfExpenses: getNumberOfItems(state),
    isDeleting: createLoadingSelector(['REMOVE_ITEM'])(state),
    isFetching: createLoadingSelector(['FETCH_ITEMS'])(state),
    isPosting: createLoadingSelector(['UPDATE_ITEM'])(state),
    isFetchError: createErrorMessageSelector(['FETCH_ITEMS'])(state),
  })
}

const mapDispatchToProps = {
  fetchItem,
  removeItem,
  updateItemRequest,
  goToHome: () => push('/'),
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Expense)
