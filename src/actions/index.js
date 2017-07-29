let nextItemId = 0

export const addItem = (title, cost) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    title,
    cost:  `$${cost.toFixed(2)}`
  }
}
