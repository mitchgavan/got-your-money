import { put, takeEvery, call } from 'redux-saga/effects'
import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_SUCCESS,
} from './currentExpenseActions'
import itemsApi from '../../api/itemsApi'

function* fetchItem(action) {
  try {
    const response = yield call(itemsApi.getOne, action.payload)
    yield put({ type: FETCH_ITEM_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: FETCH_ITEM_ERROR,
      payload: { message: err },
    })
  }
}

export function* fetchItemSaga() {
  yield takeEvery(FETCH_ITEM_REQUEST, fetchItem)
}
