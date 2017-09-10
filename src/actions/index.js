import uuid from 'uuid/v1'
import {
  ADD_ITEM,
  REMOVE_ITEM
} from './types'

// export const addItem = (title, cost, id) => {
//   return {
//     type: ADD_ITEM,
//     id,
//     title,
//     cost: cost.toFixed(2)
//   }
// }

export const addItem = (values) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: uuid(),
      title: values.title,
      cost: values.cost,
    }
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  }
}
