import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import items from './items'
import date from './date'
import loading from './loadingReducer'

export default combineReducers({
  routing: routerReducer,
  items,
  date,
  loading
})
