import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pick } from 'ramda'

import { addItem } from '../../actions'
import AddExpense from './AddExpense'

// const mapStateToProps = state => ({
//   items: state.items
// })
const mapStateToProps = pick(['items'])

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  goToHome: () => push('/'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense)
