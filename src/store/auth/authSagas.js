import { call, put } from 'redux-saga/effects'
import {
  CURRENT_SESSION_ERROR,
  CURRENT_SESSION_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
} from './authActions'
import authApi from '../../api/authApi'

export function* currentSessionSaga() {
  try {
    const response = yield call(authApi.getCurrentSession)
    yield put({ type: CURRENT_SESSION_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: CURRENT_SESSION_ERROR,
      payload: { message: err },
    })
  }
}

export function* currentUserSaga() {
  try {
    const response = yield call(authApi.getCurrentUser)
    yield put({ type: CURRENT_USER_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: CURRENT_USER_ERROR,
      payload: { message: err },
    })
  }
}

export function* signInSaga({ payload }) {
  try {
    const response = yield call(
      authApi.signIn,
      payload.username,
      payload.password
    )
    yield put({ type: SIGN_IN_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: SIGN_IN_ERROR,
      payload: { message: 'Failed API call to sign in.' },
    })
  }
}
