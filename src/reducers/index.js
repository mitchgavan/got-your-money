import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import items from './items'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  items
})
