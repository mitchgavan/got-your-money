import { getTotalCost } from '../calculations';

test('adds the cost of a list of items together to get the total cost', () => {

  const items = [
    {
      title: 'Dinner',
      cost: 23.5
    },
    {
      title: 'Lunch',
      cost: 10.2
    },
    {
      title: 'Snack',
      cost: 1.3
    }
  ]
  expect(getTotalCost(items)).toBe(35)
})
