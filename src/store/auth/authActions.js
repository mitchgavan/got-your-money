export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

export const CURRENT_SESSION_REQUEST = 'CURRENT_SESSION_REQUEST'
export const CURRENT_SESSION_SUCCESS = 'CURRENT_SESSION_SUCCESS'
export const CURRENT_SESSION_ERROR = 'CURRENT_SESSION_ERROR'

export const CURRENT_USER_REQUEST = 'CURRENT_USER_REQUEST'
export const CURRENT_USER_SUCCESS = 'CURRENT_USER_SUCCESS'
export const CURRENT_USER_ERROR = 'CURRENT_USER_ERROR'

export const getCurrentSession = payload => ({
  type: CURRENT_SESSION_REQUEST,
  payload,
})

export const getCurrentUser = payload => ({
  type: CURRENT_USER_REQUEST,
  payload,
})

export const signIn = payload => ({
  type: SIGN_IN_REQUEST,
  payload,
})
