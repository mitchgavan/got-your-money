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

const addItem = (state, { payload }) =>
  prepend({
    id: payload.id,
    title: payload.title,
    cost: payload.cost
  }, state)

const removeItem = (state, { payload }) =>
  reject(eqProps('id', payload), state)

export default createReducer(initialState, {
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem
})
