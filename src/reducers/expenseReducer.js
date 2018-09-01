import { merge } from 'ramda'
import createReducer from '../utilities/createReducer'
import { FETCH_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS } from '../actions/types'

const initialState = {
  id: '',
  title: '',
  cost: '',
  date: '',
  isDeleted: false,
}

const fetchItemSuccess = (state, { payload }) => payload
const removeItemSuccess = (state, { payload }) =>
  merge(payload, { isDeleted: true })

export default createReducer(initialState, {
  [FETCH_ITEM_SUCCESS]: fetchItemSuccess,
  [REMOVE_ITEM_SUCCESS]: removeItemSuccess,
})
