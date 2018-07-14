import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_WEEK,
} from './types'

export const addItem = payload => {
  return {
    type: ADD_ITEM,
    payload
  }
}

export const removeItem = payload => {
  return {
    type: REMOVE_ITEM,
    payload
  }
}

export const setWeek = payload => {
  return {
    type: SET_WEEK,
    payload
  }
}
