import { call, put, takeEvery } from 'redux-saga/effects'
import {
  CURRENT_SESSION_REQUEST,
  CURRENT_SESSION_ERROR,
  CURRENT_SESSION_SUCCESS,
} from '../actions/types'
import authApi from '../api/authApi'

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

export function* currentSessionSaga() {
  yield takeEvery(CURRENT_SESSION_REQUEST, currentSession)
}
