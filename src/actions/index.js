import {
  ADD_ITEM,
  REMOVE_ITEM
} from './types'

export const addItem = ({ id, title, cost, date }) => {
  return {
    type: ADD_ITEM,
    payload: {
      id,
      title,
      cost,
      date,
    }
  }
}

export const removeItem = ({ id }) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
    }
  }
}
