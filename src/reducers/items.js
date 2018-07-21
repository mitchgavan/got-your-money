import {
  prepend,
  reject,
  eqProps
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  FETCH_ITEMS_SUCCESS,
} from '../actions/types'

const initialState = []

const fetchItemsSuccess = (state, { payload }) => payload

const addItem = (state, { payload }) => {
  return prepend({
    id: payload.id,
    title: payload.title,
    cost: payload.cost,
    date: payload.date,
  }, state)
}

const removeItem = (state, { payload }) => {
  return reject(eqProps('id', payload), state)
}
  

export default createReducer(initialState, {
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem,
  [FETCH_ITEMS_SUCCESS]: fetchItemsSuccess,
})
