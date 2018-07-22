import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { 
  addItem, 
  removeItem,
  fetchItems
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
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import Home from './Home'

const mapStateToProps = state => ({
  date: state.date,
  isFetching: createLoadingSelector(['FETCH_ITEMS'])(state),
  items: getItemsOrderedByDate(state),
  itemsTotalCostForCurrentWeek: getItemsTotalCostForCurrentWeek(state),
  visibleItems: getItemsForCurrentWeek(state),
})

const mapDispatchToProps = {
  addItem,
  removeItem,
  nextWeek,
  previousWeek,
  fetchItems,
  goToAddItem: () => push('/add-expense')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
