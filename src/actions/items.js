import {
  ADD_ITEM_REQUEST,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEM_REQUEST,
  REMOVE_ITEM_REQUEST,
} from './types'

export const addItem = payload => {
  return {
    type: ADD_ITEM_REQUEST,
    payload,
  }
}

export const removeItem = payload => {
  return {
    type: REMOVE_ITEM_REQUEST,
    payload,
  }
}

export const fetchItem = payload => ({
  type: FETCH_ITEM_REQUEST,
  payload,
})

export const fetchItems = payload => ({
  type: FETCH_ITEMS_REQUEST,
  payload,
})
