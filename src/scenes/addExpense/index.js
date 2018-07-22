import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { addItem } from '../../actions/items'
import AddExpense from './AddExpense'
import { createLoadingSelector } from '../../selectors/loadingSelectors'

const mapStateToProps = state => ({
  isPosting: createLoadingSelector(['ADD_ITEM'])(state),
})

const mapDispatchToProps = {
  addItem,
  goToHome: () => push('/'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense)
