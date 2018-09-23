import { put, takeEvery, call } from 'redux-saga/effects'
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
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from '../expensesActions'
import itemsApi from '../../../api/itemsApi'
import { fetchItems } from '../expensesSagas'

describe('fetchItems', () => {
  let gen

  beforeEach(() => {
    gen = fetchItems()
  })

  test('it requests all items', () => {
    expect(gen.next().value).toEqual(call(itemsApi.getAll))
  })

  test('it dispatches a success action with the expenses payload', () => {
    const type = FETCH_ITEMS_SUCCESS
    const expenses = ['test1', 'test2']
    gen.next()
    expect(gen.next(expenses).value).toEqual(put({ type, payload: expenses }))
  })

  test('it dispatches an error action', () => {
    const type = FETCH_ITEMS_ERROR
    const payload = { message: 'Failed API call to fetch all items.' }
    gen.next()
    expect(gen.throw().value).toEqual(put({ type, payload }))
  })
})
