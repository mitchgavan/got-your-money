import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { addItem } from '../../store/expenses/expensesActions'
import AddExpense from './AddExpense'
import { createLoadingSelector } from '../../store/loading/loadingSelectors'

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
