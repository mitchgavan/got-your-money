import { push } from 'react-router-redux'
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

const mapDispatchToProps = {
  addItem,
  removeItem,
  setWeek,
  goToAddItem: () => push('/add-expense')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
