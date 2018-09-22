import { call, put, takeEvery } from 'redux-saga/effects'
import {
  CURRENT_SESSION_REQUEST,
  CURRENT_SESSION_ERROR,
  CURRENT_SESSION_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_ERROR,
} from './authActions'
import authApi from '../../api/authApi'

function* currentSession() {
  try {
    const response = yield call(authApi.getCurrentSession)
    yield put({ type: CURRENT_SESSION_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: CURRENT_SESSION_ERROR,
      payload: { message: 'Failed API call to get current session.' },
    })
  }
}

function* signIn({ payload }) {
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

export function* currentSessionSaga() {
  yield takeEvery(CURRENT_SESSION_REQUEST, currentSession)
}

export function* signInSaga() {
  yield takeEvery(SIGN_IN_REQUEST, signIn)
}
