import { merge } from 'ramda'
import createReducer from '../../utilities/createReducer'
import { CURRENT_SESSION_SUCCESS, SIGN_IN_SUCCESS } from './authActions'

const initialState = {
  isAuthenticated: null,
}

const signInSuccess = (state, { payload }) => {
  console.log('sign in', payload)
  return merge(state, { isAuthenticated: true })
}

// TODO store user details
const getCurrentSessionSuccess = (state, { payload }) => {
  console.log('current session', payload)
  return merge(state, { isAuthenticated: true })
}

export default createReducer(initialState, {
  [SIGN_IN_SUCCESS]: signInSuccess,
  [CURRENT_SESSION_SUCCESS]: getCurrentSessionSuccess,
})