import items from '../items'

test('it adds an item', () => {
  const stateBefore = []

  const action = {
    type: 'ADD_ITEM',
    id: 0,
    title: 'Food',
    cost: '$23.00'
  }

  const stateAfter = [
    {
      id: 0,
      title: 'Food',
      cost: '$23.00'
    }
  ]

  expect(items(stateBefore, action)).toEqual(stateAfter)
})

test('it removes an item', () => {
  const action = {
    type: 'REMOVE_ITEM',
    id: 23,
    title: 'Food',
    cost: '$47.00'
  }

  const stateBefore = [
    {
      id: 23,
      title: 'Food',
      cost: '$47.00'
    },
    {
      id: 7,
      title: 'Coffee',
      cost: '$3.00'
    }
  ]

  const stateAfter = [{
    id: 7,
    title: 'Coffee',
    cost: '$3.00'
  }]

  expect(items(stateBefore, action)).toEqual(stateAfter)
})
