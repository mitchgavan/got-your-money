import { when, map, merge, prepend, reject, propEq } from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM_SUCCESS,
  FETCH_ITEMS_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
} from '../actions/types'

const initialState = []

const fetchItemsSuccess = (state, { payload }) => payload

const addItemSuccess = (state, { payload }) => prepend(payload, state)

const removeItemSuccess = (state, { payload }) =>
  reject(propEq('id', payload), state)

const updateItemSuccess = (state, { payload }) =>
  map(when(propEq('id', payload.id), merge(payload)), state)

export default createReducer(initialState, {
  [ADD_ITEM_SUCCESS]: addItemSuccess,
  [REMOVE_ITEM_SUCCESS]: removeItemSuccess,
  [FETCH_ITEMS_SUCCESS]: fetchItemsSuccess,
  [UPDATE_ITEM_SUCCESS]: updateItemSuccess,
})
