import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loading from './loadingReducer'
import error from './errorReducer'
import date from './dateReducer'
import items from './itemsReducer'

export default combineReducers({
  routing: routerReducer,
  items,
  date,
  loading,
  error
})
