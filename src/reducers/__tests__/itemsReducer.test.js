import items from '../itemsReducer'
import { ADD_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS } from '../../actions/types'

describe('addItem', () => {
  test('it successfully adds an item', () => {
    const stateBefore = []

    const action = {
      type: ADD_ITEM_SUCCESS,
      payload: {
        id: 1,
        title: 'Food',
        cost: '$23.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    }

    const stateAfter = [
      {
        id: 1,
        title: 'Food',
        cost: '$23.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]

    expect(items(stateBefore, action)).toEqual(stateAfter)
  })
})

describe('addItem', () => {
  test('it successfully removes an item', () => {
    const action = {
      type: REMOVE_ITEM_SUCCESS,
      payload: 23,
    }

    const stateBefore = [
      {
        id: 23,
        title: 'Food',
        cost: '$47.00',
        date: '2018-07-28T14:00:00.000Z',
      },
      {
        id: 7,
        title: 'Coffee',
        cost: '$3.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]

    const stateAfter = [
      {
        id: 7,
        title: 'Coffee',
        cost: '$3.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]

    expect(items(stateBefore, action)).toEqual(stateAfter)
  })

  test('nothing happens if there is no item with a matching ID', () => {
    const action = {
      type: REMOVE_ITEM_SUCCESS,
      payload: 11,
    }

    const stateBefore = [
      {
        id: 23,
        title: 'Food',
        cost: '$47.00',
        date: '2018-07-28T14:00:00.000Z',
      },
      {
        id: 7,
        title: 'Coffee',
        cost: '$3.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]

    const stateAfter = [
      {
        id: 23,
        title: 'Food',
        cost: '$47.00',
        date: '2018-07-28T14:00:00.000Z',
      },
      {
        id: 7,
        title: 'Coffee',
        cost: '$3.00',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]

    expect(items(stateBefore, action)).toEqual(stateAfter)
  })
})
