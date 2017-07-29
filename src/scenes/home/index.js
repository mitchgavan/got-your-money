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
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
