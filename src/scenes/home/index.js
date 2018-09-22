import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { fetchItems } from '../../store/expenses/expensesActions'
import { nextWeek, previousWeek } from '../../store/date/dateActions'
import {
  getItemsOrderedByDate,
  getItemsForCurrentWeek,
  getItemsTotalCostForCurrentWeek,
} from '../../store/expenses/expensesSelectors'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'
import Home from './Home'

const mapStateToProps = state => ({
  authentication: state.authentication,
  date: state.date,
  isFetching: createLoadingSelector(['FETCH_ITEMS'])(state),
  isApiError: createErrorMessageSelector(['FETCH_ITEMS', 'REMOVE_ITEM'])(state),
  items: getItemsOrderedByDate(state),
  itemsTotalCostForCurrentWeek: getItemsTotalCostForCurrentWeek(state),
  visibleItems: getItemsForCurrentWeek(state),
})

const mapDispatchToProps = {
  nextWeek,
  previousWeek,
  fetchItems,
  goToItem: id => push(`/expense/${id}`),
  goToAddItem: () => push('/add-expense'),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
