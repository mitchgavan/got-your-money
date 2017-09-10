import {
  ADD_ITEM,
  REMOVE_ITEM
} from './types'

export const addItem = (title, cost, id) => {
  return {
    type: ADD_ITEM,
    id,
    title,
    cost: cost.toFixed(2)
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  }
}

export const addItemCustom = (values, id) => {
  return {
    type: ADD_ITEM,
    id,
    title: values.itemName,
    cost: values.cost,
  }
}
