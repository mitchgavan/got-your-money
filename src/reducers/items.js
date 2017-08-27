import {
  prepend,
  reject,
  equals,
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions/types'

const initialState = []

const addItem = (state, action) => prepend({
  id: action.id,
  title: action.title,
  cost: action.cost
}, state)

const removeItem = (state, action) =>
  reject(item => equals(item.id, action.id), state)

export default createReducer(initialState, {
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem
});
