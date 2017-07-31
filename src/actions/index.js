let nextItemId = 0

export const addItem = (title, cost) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    title,
    cost: cost.toFixed(2)
  }
}

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id,
  }
}
