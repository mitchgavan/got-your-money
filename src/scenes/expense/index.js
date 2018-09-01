import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { fetchItem, removeItem } from '../../actions/items'
import Block from '../../components/Block'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import ButtonLink from '../../components/ButtonLink'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'

class Expense extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id)
  }

  handleRemoveClick = () => {
    const { expense, removeItem } = this.props
    removeItem(expense.id)
  }

  render() {
    const { expense, isDeleting, isFetching, isFetchError } = this.props

    if (isFetching) {
      return (
        <Block p={4}>
          <Text>Loading...</Text>
        </Block>
      )
    }

    if (isFetchError) {
      return (
        <Block p={4}>
          <Text>Error trying to load this expense.</Text>
        </Block>
      )
    }

    if (expense.isDeleted) {
      return (
        <Block p={4}>
          <Text>This expense has been removed.</Text>
        </Block>
      )
    }

    return (
      <Block p={4}>
        <Heading>{expense.title}</Heading>
        <Text>Cost: {expense.cost}</Text>
        <ButtonLink onClick={this.handleRemoveClick}>
          {isDeleting ? 'Removing...' : 'Remove'}
        </ButtonLink>
      </Block>
    )
  }
}

const mapStateToProps = state => ({
  expense: state.expense,
  isDeleting: createLoadingSelector(['REMOVE_ITEM'])(state),
  isFetching: createLoadingSelector(['FETCH_ITEM'])(state),
  isFetchError: createErrorMessageSelector(['FETCH_ITEM'])(state),
})

const mapDispatchToProps = {
  fetchItem,
  removeItem,
  goToHome: () => push('/'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense)
