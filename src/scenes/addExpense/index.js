import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { addItem } from '../../actions'
import AddExpense from './AddExpense'

const mapDispatchToProps = {
  addItem,
  goToHome: () => push('/'),
}

export default connect(
  null,
  mapDispatchToProps
)(AddExpense)
