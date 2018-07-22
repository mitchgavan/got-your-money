import {
  prepend,
  reject,
  eqProps
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM,
  FETCH_ITEMS_SUCCESS,
} from '../actions/types'

const initialState = []

const fetchItemsSuccess = (state, { payload }) => payload

const addItemSuccess = (state, { payload }) =>
  prepend(payload, state)

const removeItem = (state, { payload }) => {
  return reject(eqProps('id', payload), state)
}
  

export default createReducer(initialState, {
  [ADD_ITEM_SUCCESS]: addItemSuccess,
  [REMOVE_ITEM]: removeItem,
  [FETCH_ITEMS_SUCCESS]: fetchItemsSuccess,
})
