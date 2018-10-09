import { put, call } from 'redux-saga/effects'
import authApi from '../../../api/authApi'
import { currentSessionSaga, signInSaga, currentUserSaga } from '../authSagas'
import {
  CURRENT_SESSION_SUCCESS,
  CURRENT_SESSION_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
} from '../authActions'

describe('authSagas', () => {
  describe('currentSessionSaga', () => {
    let gen
    let action

    beforeEach(() => {
      action = {}
      gen = currentSessionSaga(action)
    })

    test('it requests the current session', () => {
      expect(gen.next().value).toEqual(call(authApi.getCurrentSession))
    })

    test('it dispatches a success action with the response payload', () => {
      const type = CURRENT_SESSION_SUCCESS
      const response = {}
      gen.next()
      expect(gen.next(response).value).toEqual(put({ type, payload: response }))
    })

    test('it dispatches an error action', () => {
      const type = CURRENT_SESSION_ERROR
      const payload = { message: 'some error' }
      gen.next()
      expect(gen.throw('some error').value).toEqual(put({ type, payload }))
    })
  })

  describe('currentUserSaga', () => {
    let gen
    let action

    beforeEach(() => {
      action = {}
      gen = currentUserSaga(action)
    })

    test('it requests the current authenticated user', () => {
      expect(gen.next().value).toEqual(call(authApi.getCurrentUser))
    })

    test('it dispatches a success action with the response payload', () => {
      const type = CURRENT_USER_SUCCESS
      const response = {}
      gen.next()
      expect(gen.next(response).value).toEqual(put({ type, payload: response }))
    })

    test('it dispatches an error action', () => {
      const type = CURRENT_USER_ERROR
      const payload = { message: 'some error' }
      gen.next()
      expect(gen.throw('some error').value).toEqual(put({ type, payload }))
    })
  })

  describe('signInSaga', () => {
    let gen
    let action

    beforeEach(() => {
      action = {
        payload: {
          username: 'tester',
          password: 'Password1',
        },
      }
      gen = signInSaga(action)
    })

    test('it requests to sign in', () => {
      expect(gen.next().value).toEqual(
        call(authApi.signIn, action.payload.username, action.payload.password)
      )
    })

    test('it dispatches a success action with the response payload', () => {
      const type = SIGN_IN_SUCCESS
      const response = {}
      gen.next()
      expect(gen.next(response).value).toEqual(put({ type, payload: response }))
    })

    test('it dispatches an error action', () => {
      const type = SIGN_IN_ERROR
      const payload = { message: 'Failed API call to sign in.' }
      gen.next()
      expect(gen.throw('some error').value).toEqual(put({ type, payload }))
    })
  })
})
