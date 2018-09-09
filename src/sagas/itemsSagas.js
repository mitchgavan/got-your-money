import { put, takeEvery, call } from 'redux-saga/effects'
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_SUCCESS,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  ADD_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_ERROR,
  REMOVE_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from '../actions/types'
import itemsApi from '../api/itemsApi'

function* fetchItems() {
  try {
    const response = yield call(itemsApi.getAll)
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: response })
  } catch (err) {
    yield put({
      type: FETCH_ITEMS_ERROR,
      payload: { message: 'Failed API call to fetch all items.' },
    })
  }
}

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

function* addItem(action) {
  try {
    yield call(itemsApi.createItem, action.payload)
    yield put({ type: ADD_ITEM_SUCCESS, payload: action.payload })
  } catch (err) {
    yield put({
      type: ADD_ITEM_ERROR,
      payload: { message: 'Failed API call to add item.' },
    })
  }
}

function* removeItem(action) {
  try {
    yield call(itemsApi.deleteItem, action.payload)
    yield put({ type: REMOVE_ITEM_SUCCESS, payload: action.payload })
  } catch (err) {
    yield put({
      type: REMOVE_ITEM_ERROR,
      payload: { message: 'Failed API call to remove item.' },
    })
  }
}

function* updateItem({ payload }) {
  try {
    yield call(itemsApi.updateItem, payload)
    yield put({ type: UPDATE_ITEM_SUCCESS, payload })
    // refresh all items
    yield put({ type: FETCH_ITEMS_REQUEST })
  } catch (err) {
    console.log('saga err', err)
    yield put({
      type: UPDATE_ITEM_ERROR,
      payload: { message: 'Failed API call to update item' },
    })
  }
}

// Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action. Allows concurrent fetches of user.
export function* fetchItemsSaga() {
  yield takeEvery(FETCH_ITEMS_REQUEST, fetchItems)
}

export function* fetchItemSaga() {
  yield takeEvery(FETCH_ITEM_REQUEST, fetchItem)
}

export function* addItemSaga() {
  yield takeEvery(ADD_ITEM_REQUEST, addItem)
}

export function* removeItemSaga() {
  yield takeEvery(REMOVE_ITEM_REQUEST, removeItem)
}

export function* updateItemSaga() {
  yield takeEvery(UPDATE_ITEM_REQUEST, updateItem)
}
