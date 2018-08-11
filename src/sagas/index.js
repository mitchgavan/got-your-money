import { all } from 'redux-saga/effects'
import { fetchItemsSaga, addItemSaga, removeItemSaga } from './itemsSagas'
import { currentSessionSaga, signInSaga } from './authSagas'

export default function* rootSaga() {
  yield all([
    fetchItemsSaga(),
    addItemSaga(),
    removeItemSaga(),
    currentSessionSaga(),
    signInSaga(),
  ])
}
