import { put, call } from 'redux-saga/effects'
import { FETCH_ITEM_SUCCESS, FETCH_ITEM_ERROR } from '../currentExpenseActions'
import { fetchItem } from '../currentExpenseSagas'
import itemsApi from '../../../api/itemsApi'

describe('fetchItem', () => {
  let gen
  let action

  beforeEach(() => {
    action = { payload: '1' }
    gen = fetchItem(action)
  })

  test('it requests an item', () => {
    expect(gen.next().value).toEqual(call(itemsApi.getOne, action.payload))
  })

  test('it dispatches a success action with the expense payload', () => {
    const type = FETCH_ITEM_SUCCESS
    const expense = { id: '1', title: 'food' }
    gen.next()
    expect(gen.next(expense).value).toEqual(put({ type, payload: expense }))
  })

  test('it dispatches an error action', () => {
    const type = FETCH_ITEM_ERROR
    const payload = { message: 'some error' }
    gen.next()
    expect(gen.throw('some error').value).toEqual(put({ type, payload }))
  })
})
