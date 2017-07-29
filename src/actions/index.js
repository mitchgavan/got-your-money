let nextItemId = 0

export const addItem = () => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    text: 'Dinner'
  }
}
