import { CURRENT_SESSION_REQUEST } from './types'

export const getCurrentSession = payload => ({
  type: CURRENT_SESSION_REQUEST,
  payload,
})
