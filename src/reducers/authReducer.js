import { merge } from 'ramda'
import createReducer from '../utilities/createReducer'
import { LOGIN_SUCCESS, CURRENT_SESSION_SUCCESS } from '../actions/types'

const initialState = {
  isAuthenticated: null,
}

// const loginSuccess = (state, { payload }) => payload

// TODO store user details
const getCurrentSessionSuccess = (state, { payload }) => {
  if (payload.accessToken) {
    return merge(state, { isAuthenticated: true })
  }
  return state
}

export default createReducer(initialState, {
  // [LOGIN_SUCCESS]: loginSuccess,
  [CURRENT_SESSION_SUCCESS]: getCurrentSessionSuccess,
})
