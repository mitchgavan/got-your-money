import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_ERROR,
    FETCH_ITEMS_SUCCESS
} from '../actions/types'

// TODO move this to API
// function that makes the api request and returns a Promise for response
function apiFetchItems() {
    return axios({
        method: 'get',
        url: process.env.REACT_APP_ITEMS_ENDPOINT
    })
}

function* fetchItems(action) {
    try {
        const response = yield call(apiFetchItems)
        yield put({ type: FETCH_ITEMS_SUCCESS, payload: response.data })
    } catch (e) {
        yield put({ type: FETCH_ITEMS_ERROR, payload: 'fail' })
    }
}

// Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action. Allows concurrent fetches of user.
export function* fetchItemsSaga() {
    yield takeEvery(FETCH_ITEMS_REQUEST, fetchItems)
}