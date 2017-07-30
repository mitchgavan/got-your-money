import items from '../items'

test('it adds an item', () => {
  const stateBefore = [];

  const action = {
    type: 'ADD_ITEM',
    id: 0,
    title: 'Food',
    cost: '$23.00'
  };

  const stateAfter = [
    {
      id: 0,
      title: 'Food',
      cost: '$23.00'
    }
  ];

  expect(items(stateBefore, action))
    .toEqual(stateAfter);
});
