import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loading from './loading/loadingReducer'
import error from './error/errorReducer'
import date from './date/dateReducer'
import items from './expenses/expensesReducer'
import authentication from './auth/authReducer'
import expense from './currentExpense/currentExpenseReducer'

export default combineReducers({
  routing: routerReducer,
  items,
  date,
  loading,
  error,
  authentication,
  expense,
})
