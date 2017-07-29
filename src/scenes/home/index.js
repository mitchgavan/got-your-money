import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addItem } from '../../actions'
import Home from './Home'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
