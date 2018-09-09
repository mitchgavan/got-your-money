import { merge } from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  FETCH_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  ITEM_SELECTED,
} from '../actions/types'

const initialState = {
  id: '',
  title: '',
  cost: '',
  date: '',
}

const fetchItemSuccess = (state, { payload }) => payload

const removeItemSuccess = (state, { payload }) =>
  merge(payload, { isDeleted: true })

const selectItem = (state, { payload }) => merge(state, { id: payload })

export default createReducer(initialState, {
  [FETCH_ITEM_SUCCESS]: fetchItemSuccess,
  [REMOVE_ITEM_SUCCESS]: removeItemSuccess,
  [ITEM_SELECTED]: selectItem,
})
