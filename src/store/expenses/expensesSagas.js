import { put, call } from 'redux-saga/effects';
import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from './expensesActions';
import itemsApi from '../../api/itemsApi';

export function* fetchItemsSaga() {
  try {
    const response = yield call(itemsApi.getAll);
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: response });
  } catch (err) {
    yield put({
      type: FETCH_ITEMS_ERROR,
      payload: { message: 'Failed API call to fetch all items.' },
    });
  }
}

export function* addItemSaga(action) {
  try {
    yield call(itemsApi.createItem, action.payload);
    yield put({ type: ADD_ITEM_SUCCESS, payload: action.payload });
  } catch (err) {
    yield put({
      type: ADD_ITEM_ERROR,
      payload: { message: 'Failed API call to add item.' },
    });
  }
}

export function* removeItemSaga(action) {
  try {
    yield call(itemsApi.deleteItem, action.payload);
    yield put({ type: REMOVE_ITEM_SUCCESS, payload: action.payload });
  } catch (err) {
    yield put({
      type: REMOVE_ITEM_ERROR,
      payload: { message: 'Failed API call to remove item.' },
    });
  }
}

export function* updateItemSaga({ payload }) {
  try {
    yield call(itemsApi.updateItem, payload);
    yield put({ type: UPDATE_ITEM_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: UPDATE_ITEM_ERROR,
      payload: { message: 'Failed API call to update item' },
    });
  }
}
