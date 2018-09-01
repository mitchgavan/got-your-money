import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { fetchItem } from '../../actions/items'
import Block from '../../components/Block'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'

class Expense extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    const { expense, isFetching, isFetchError } = this.props

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

    return (
      <Block p={4}>
        <Heading>{expense.title}</Heading>
        <Text>Cost: {expense.cost}</Text>
      </Block>
    )
  }
}

const mapStateToProps = state => ({
  expense: state.expense,
  isFetching: createLoadingSelector(['FETCH_ITEM'])(state),
  isFetchError: createErrorMessageSelector(['FETCH_ITEM'])(state),
})

const mapDispatchToProps = {
  fetchItem,
  goToHome: () => push('/'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense)
