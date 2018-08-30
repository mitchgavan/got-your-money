import createReducer from '../utilities/createReducer'
import { FETCH_ITEM_SUCCESS } from '../actions/types'

const initialState = {
  id: '',
  title: '',
  cost: '',
  date: '',
}

const fetchItemSuccess = (state, { payload }) => payload

export default createReducer(initialState, {
  [FETCH_ITEM_SUCCESS]: fetchItemSuccess,
})
