// let nextItemId = 0

import uuidv1 from 'uuid/v1'

export const addItem = (title, cost, id) => {
  return {
    type: 'ADD_ITEM',
    id,
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
