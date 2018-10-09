import authReducer from '../authReducer'
import {
  SIGN_IN_SUCCESS,
  CURRENT_SESSION_SUCCESS,
  CURRENT_USER_SUCCESS,
} from '../authActions'

describe('authReducer', () => {
  describe('signInSuccess', () => {
    test('it should set isAuthenticated to true', () => {
      const state = {
        isAuthenticated: false,
      }
      const action = {
        type: SIGN_IN_SUCCESS,
        payload: {},
      }
      const newState = {
        isAuthenticated: true,
      }

      expect(authReducer(state, action)).toEqual(newState)
    })
  })

  describe('getCurrentUserSuccess', () => {
    test('it should set isAuthenticated to true', () => {
      const state = {
        isAuthenticated: false,
      }
      const action = {
        type: CURRENT_USER_SUCCESS,
        payload: {},
      }
      const newState = {
        isAuthenticated: true,
      }

      expect(authReducer(state, action)).toEqual(newState)
    })
  })

  describe('getCurrentSessionSuccess', () => {
    test('it should set isAuthenticated to true', () => {
      const state = {
        isAuthenticated: false,
      }
      const action = {
        type: CURRENT_SESSION_SUCCESS,
        payload: {},
      }
      const newState = {
        isAuthenticated: true,
      }

      expect(authReducer(state, action)).toEqual(newState)
    })
  })
})
