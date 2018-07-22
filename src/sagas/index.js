import { all, put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_ERROR,
    FETCH_ITEMS_SUCCESS,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR,
    ADD_ITEM_REQUEST,
    REMOVE_ITEM_SUCCESS,
    REMOVE_ITEM_ERROR,
    REMOVE_ITEM_REQUEST
} from '../actions/types'

// TODO move this to API
// function that makes the api request and returns a Promise for response
function apiFetchItems() {
    return axios({
        method: 'get',
        url: process.env.REACT_APP_ITEMS_ENDPOINT
    })
}

function apiCreateItem(data) {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_ITEMS_ENDPOINT,
        data
    })
}

function apiDeleteItem(id) {
    return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_ITEMS_ENDPOINT}/${id}`,
    })
}

function* fetchItems(action) {
    try {
        const response = yield call(apiFetchItems)
        yield put({ type: FETCH_ITEMS_SUCCESS, payload: response.data })
    } catch (err) {
        yield put({ type: FETCH_ITEMS_ERROR, payload: 'fail' })
    }
}

function* addItem(action) {
    try {
        const response = yield call(apiCreateItem, action.payload)
        yield put({ type: ADD_ITEM_SUCCESS, payload: response.data })
    } catch (err) {
        yield put({ type: ADD_ITEM_ERROR, payload: 'fail' })
    }
}

function* removeItem(action) {
    try {
        const response = yield call(apiDeleteItem, action.payload.id)
        yield put({ type: REMOVE_ITEM_SUCCESS, payload: response.data.item._id })
    } catch(err) {
        yield put({ type: REMOVE_ITEM_ERROR, payload: 'fail'})
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
    yield all([
        fetchItemsSaga(),
        addItemSaga(),
        removeItemSaga()
    ])
}