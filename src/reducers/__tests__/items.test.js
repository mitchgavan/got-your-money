import items from '../items'
import { ADD_ITEM, REMOVE_ITEM } from '../../actions/types'

test('it adds an item', () => {
  const stateBefore = []

  const action = {
    type: ADD_ITEM,
    payload: {
      id: 1,
      title: 'Food',
      cost: '$23.00',
    },
  }

  const stateAfter = [
    {
      id: 1,
      title: 'Food',
      cost: '$23.00',
    },
  ]

  expect(items(stateBefore, action)).toEqual(stateAfter)
})

test('it removes an item', () => {
  const action = {
    type: REMOVE_ITEM,
    payload: {
      id: 23,
    },
  }

  const stateBefore = [
    {
      id: 23,
      title: 'Food',
      cost: '$47.00',
    },
    {
      id: 7,
      title: 'Coffee',
      cost: '$3.00',
    },
  ]

  const stateAfter = [
    {
      id: 7,
      title: 'Coffee',
      cost: '$3.00',
    },
  ]

  expect(items(stateBefore, action)).toEqual(stateAfter)
})
