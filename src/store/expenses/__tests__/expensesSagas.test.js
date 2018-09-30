import { put, call } from 'redux-saga/effects'
import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from '../expensesActions'
import itemsApi from '../../../api/itemsApi'
import {
  fetchItemsSaga,
  addItemSaga,
  removeItemSaga,
  updateItemSaga,
} from '../expensesSagas'

describe('fetchItems', () => {
  let gen

  beforeEach(() => {
    gen = fetchItemsSaga()
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

describe('addItem', () => {
  let gen
  let action

  beforeEach(() => {
    action = {
      type: 'test',
      payload: { title: 'test', cost: '1', date: '1/1/18' },
    }
    gen = addItemSaga(action)
  })

  test('it creates a new item', () => {
    expect(gen.next().value).toEqual(call(itemsApi.createItem, action.payload))
  })

  test('it dispatches a success action with the expenses payload', () => {
    const type = ADD_ITEM_SUCCESS
    gen.next()
    expect(gen.next().value).toEqual(put({ type, payload: action.payload }))
  })

  test('it dispatches an error action', () => {
    const type = ADD_ITEM_ERROR
    action.payload = { message: 'Failed API call to add item.' }
    gen.next()
    expect(gen.throw().value).toEqual(put({ type, payload: action.payload }))
  })
})

describe('removeItem saga', () => {
  let gen
  let action

  beforeEach(() => {
    action = {
      type: 'test',
      payload: '1',
    }
    gen = removeItemSaga(action)
  })

  it('it makes a request to removes an item', () => {
    expect(gen.next().value).toEqual(call(itemsApi.deleteItem, action.payload))
  })

  it('dispatches a success action with the id', () => {
    const type = REMOVE_ITEM_SUCCESS
    gen.next()
    expect(gen.next().value).toEqual(put({ type, payload: action.payload }))
  })

  it('dispatches an error action', () => {
    const type = REMOVE_ITEM_ERROR
    action.payload = { message: 'Failed API call to remove item.' }
    gen.next()
    expect(gen.throw().value).toEqual(put({ type, payload: action.payload }))
  })
})

describe('updateItem saga', () => {
  let gen
  let action

  beforeEach(() => {
    action = {
      type: 'test',
      payload: { title: 'test', cost: '1', date: '1/1/18' },
    }
    gen = updateItemSaga(action)
  })

  it('makes a request to update an item', () => {
    expect(gen.next().value).toEqual(call(itemsApi.updateItem, action.payload))
  })

  it('dispatches a success action with the payload', () => {
    const type = UPDATE_ITEM_SUCCESS
    gen.next()
    expect(gen.next().value).toEqual(put({ type, payload: action.payload }))
  })

  it('dispatches an error', () => {
    const type = UPDATE_ITEM_ERROR
    action.payload = { message: 'Failed API call to update item' }
    gen.next()
    expect(gen.throw().value).toEqual(put({ type, payload: action.payload }))
  })
})
