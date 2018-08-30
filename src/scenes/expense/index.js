import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { fetchItem } from '../../actions/items'
import Block from '../../components/Block'
import Heading from '../../components/Heading'
import Text from '../../components/Text'

class Expense extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    const { expense } = this.props

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
})

const mapDispatchToProps = {
  fetchItem,
  goToHome: () => push('/'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense)
