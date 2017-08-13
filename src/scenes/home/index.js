import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addItem, removeItem } from '../../actions'
import Home from './Home'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  removeItem,
  goToAddItem: () => push('/add-expense')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
