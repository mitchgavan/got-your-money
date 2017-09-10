import {
  prepend,
  reject,
  eqProps
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions/types'

const initialState = []

const addItem = (state, action) => prepend({
  id: action.payload.id,
  title: action.payload.title,
  cost: action.payload.cost
}, state)

const removeItem = (state, action) =>
  reject(eqProps('id', action), state)

export default createReducer(initialState, {
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem
});
