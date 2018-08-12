import { getTotalCost } from '../calculations'

describe('getTotalCost', () => {
  test('returns zero when an empty list is supplied', () => {
    const items = []
    expect(getTotalCost(items)).toBe(0)
  })

  test('calculates the total cost of a list of items', () => {
    const items = [
      {
        title: 'Dinner',
        cost: 23.5,
      },
      {
        title: 'Lunch',
        cost: 10.2,
      },
      {
        title: 'Snack',
        cost: 1.3,
      },
    ]
    expect(getTotalCost(items)).toBe(35)
  })

  test('calculates the total cost of a list of items and ignores items that do not have a cost key', () => {
    const items = [
      {
        title: 'Dinner',
        cost: 23.5,
      },
      {
        title: 'Lunch',
        cost: 10,
      },
      {
        title: 'Snack',
      },
    ]
    expect(getTotalCost(items)).toBe(33.5)
  })

  test('calculates the total cost of a list of items and ignores items that do not have a number assigned to the cost key', () => {
    const items = [
      {
        title: 'Dinner',
        cost: 23.5,
      },
      {
        title: 'Lunch',
        cost: 'huh',
      },
      {
        title: 'Snack',
      },
    ]
    expect(getTotalCost(items)).toBe(23.5)
  })
})
