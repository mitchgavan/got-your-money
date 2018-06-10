import createReducer from '../utilities/createReducer'
import { merge } from 'ramda'
import { SET_WEEK } from '../actions/types'

const initialState = {
    startOfWeek: null
}

const setWeek = (state, { payload }) => merge(state, payload)

export default createReducer(initialState, {
    [SET_WEEK]: setWeek,
})