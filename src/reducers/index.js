import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import items from './items'

export default combineReducers({
  routing: routerReducer,
  items
})
