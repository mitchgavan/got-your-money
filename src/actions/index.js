// let nextItemId = 0

import uuidv1 from 'uuid/v1'

export const addItem = (title, cost) => {
  return {
    type: 'ADD_ITEM',
    id: uuidv1(),
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
