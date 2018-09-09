import { all } from 'redux-saga/effects'
import {
  fetchItemsSaga,
  fetchItemSaga,
  addItemSaga,
  removeItemSaga,
  updateItemSaga,
} from './itemsSagas'
import { currentSessionSaga, signInSaga } from './authSagas'

export default function* rootSaga() {
  yield all([
    fetchItemsSaga(),
    fetchItemSaga(),
    addItemSaga(),
    removeItemSaga(),
    updateItemSaga(),
    currentSessionSaga(),
    signInSaga(),
  ])
}
