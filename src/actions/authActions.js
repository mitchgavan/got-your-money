import { CURRENT_SESSION_REQUEST, SIGN_IN_REQUEST } from './types'

export const getCurrentSession = payload => ({
  type: CURRENT_SESSION_REQUEST,
  payload,
})

export const signIn = payload => ({
  type: SIGN_IN_REQUEST,
  payload,
})
