import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loading from './loadingReducer'
import error from './errorReducer'
import date from '../store/date/dateReducer'
import items from '../store/expenses/expensesReducer'
import authentication from '../store/auth/authReducer'
import expense from '../store/currentExpense/currentExpenseReducer'

export default combineReducers({
  routing: routerReducer,
  items,
  date,
  loading,
  error,
  authentication,
  expense,
})
