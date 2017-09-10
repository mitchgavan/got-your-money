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

export const addItem = (values, id) => {
  return {
    type: ADD_ITEM,
    payload: {
      id,
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
