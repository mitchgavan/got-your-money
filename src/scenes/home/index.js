import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { 
  addItem, 
  removeItem, 
} from '../../actions/items'
import { 
  nextWeek,
  previousWeek,
} from '../../actions/date'
import {
  getItemsOrderedByDate,
  getItemsForCurrentWeek,
  getItemsTotalCostForCurrentWeek,
} from '../../selectors/itemsSelectors'
import Home from './Home'

const mapStateToProps = state => ({
  date: state.date,
  items: getItemsOrderedByDate(state),
  itemsTotalCostForCurrentWeek: getItemsTotalCostForCurrentWeek(state),
  visibleItems: getItemsForCurrentWeek(state),
})

const mapDispatchToProps = {
  addItem,
  removeItem,
  nextWeek,
  previousWeek,
  goToAddItem: () => push('/add-expense')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
