import { takeEvery } from 'redux-saga/effects'
import {
  fetchItemsSaga,
  addItemSaga,
  removeItemSaga,
  updateItemSaga,
} from './expenses/expensesSagas'
import { fetchItemSaga } from './currentExpense/currentExpenseSagas'
import { currentSessionSaga, signInSaga } from './auth/authSagas'
import {
  ADD_ITEM_REQUEST,
  FETCH_ITEMS_REQUEST,
  REMOVE_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
} from './expenses/expensesActions'
import { FETCH_ITEM_REQUEST } from './currentExpense/currentExpenseActions'
import { CURRENT_SESSION_REQUEST, SIGN_IN_REQUEST } from './auth/authActions'

export default function* rootSaga() {
  yield [
    takeEvery(FETCH_ITEMS_REQUEST, fetchItemsSaga),
    takeEvery(ADD_ITEM_REQUEST, addItemSaga),
    takeEvery(REMOVE_ITEM_REQUEST, removeItemSaga),
    takeEvery(UPDATE_ITEM_REQUEST, updateItemSaga),
    takeEvery(FETCH_ITEM_REQUEST, fetchItemSaga),
    takeEvery(CURRENT_SESSION_REQUEST, currentSessionSaga),
    takeEvery(SIGN_IN_REQUEST, signInSaga),
  ]
}
