import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_WEEK,
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

export const setWeek = ({ startOfWeek }) => {
  return {
    type: SET_WEEK,
    payload: { startOfWeek }
  }
}
