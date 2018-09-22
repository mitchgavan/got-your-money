import { all } from 'redux-saga/effects'
import {
  fetchItemsSaga,
  addItemSaga,
  removeItemSaga,
  updateItemSaga,
} from './expenses/expensesSagas'
import { fetchItemSaga } from './currentExpense/currentExpenseSagas'
import { currentSessionSaga, signInSaga } from './auth/authSagas'

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
