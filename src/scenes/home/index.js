import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { removeItem, fetchItems } from '../../actions/items'
import { nextWeek, previousWeek } from '../../actions/date'
import {
  getItemsOrderedByDate,
  getItemsForCurrentWeek,
  getItemsTotalCostForCurrentWeek,
} from '../../selectors/itemsSelectors'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'
import Home from './Home'

const mapStateToProps = state => ({
  date: state.date,
  isFetching: createLoadingSelector(['FETCH_ITEMS'])(state),
  isDeletingItem: createLoadingSelector(['REMOVE_ITEM'])(state),
  isApiError: createErrorMessageSelector(['FETCH_ITEMS', 'REMOVE_ITEM'])(state),
  items: getItemsOrderedByDate(state),
  itemsTotalCostForCurrentWeek: getItemsTotalCostForCurrentWeek(state),
  visibleItems: getItemsForCurrentWeek(state),
})

const mapDispatchToProps = {
  removeItem,
  nextWeek,
  previousWeek,
  fetchItems,
  goToAddItem: () => push('/add-expense'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
