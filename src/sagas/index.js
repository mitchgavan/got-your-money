import { all, put, takeEvery, call } from 'redux-saga/effects'
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  ADD_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_ERROR,
  REMOVE_ITEM_REQUEST,
} from '../actions/types'
import itemsApi from '../api/itemsApi'

function* fetchItems() {
  try {
    const response = yield call(itemsApi.getAll)
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: response.data })
  } catch (err) {
    yield put({
      type: FETCH_ITEMS_ERROR,
      payload: { message: 'Failed API call to fetch all items.' },
    })
  }
}

function* addItem(action) {
  try {
    const response = yield call(itemsApi.createItem, action.payload)
    yield put({ type: ADD_ITEM_SUCCESS, payload: response.data })
  } catch (err) {
    yield put({
      type: ADD_ITEM_ERROR,
      payload: { message: 'Failed API call to add item.' },
    })
  }
}

function* removeItem(action) {
  try {
    const response = yield call(itemsApi.deleteItem, action.payload.id)
    yield put({ type: REMOVE_ITEM_SUCCESS, payload: response.data.item._id })
  } catch (err) {
    yield put({
      type: REMOVE_ITEM_ERROR,
      payload: { message: 'Failed API call to remove item.' },
    })
  }
}

// Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action. Allows concurrent fetches of user.
function* fetchItemsSaga() {
  yield takeEvery(FETCH_ITEMS_REQUEST, fetchItems)
}

function* addItemSaga() {
  yield takeEvery(ADD_ITEM_REQUEST, addItem)
}

function* removeItemSaga() {
  yield takeEvery(REMOVE_ITEM_REQUEST, removeItem)
}

export default function* rootSaga() {
  yield all([fetchItemsSaga(), addItemSaga(), removeItemSaga()])
}
