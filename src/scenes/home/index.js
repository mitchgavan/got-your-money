import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
  addItem, 
  removeItem, 
  setWeek 
} from '../../actions'
import {
  getItemsOrderedByDate,
  getItemsForCurrentWeek
} from '../../selectors/itemsSelectors'
import Home from './Home'

const mapStateToProps = state => ({
  date: state.date,
  items: getItemsOrderedByDate(state),
  visibleItems: getItemsForCurrentWeek(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  removeItem,
  setWeek,
  goToAddItem: () => push('/add-expense')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
