import {
  prepend,
  reject,
  propEq
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM_SUCCESS,
  FETCH_ITEMS_SUCCESS,
  REMOVE_ITEM_SUCCESS,
} from '../actions/types'

const initialState = []

const fetchItemsSuccess = (state, { payload }) => payload

const addItemSuccess = (state, { payload }) =>
  prepend(payload, state)

const removeItemSuccess = (state, { payload }) =>
  reject(propEq('_id', payload), state)

export default createReducer(initialState, {
  [ADD_ITEM_SUCCESS]: addItemSuccess,
  [REMOVE_ITEM_SUCCESS]: removeItemSuccess,
  [FETCH_ITEMS_SUCCESS]: fetchItemsSuccess,
})
