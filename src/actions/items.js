import {
  ADD_ITEM_REQUEST,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEM_REQUEST,
  REMOVE_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
  ITEM_SELECTED,
} from './types'

export const addItem = payload => ({
  type: ADD_ITEM_REQUEST,
  payload,
})

export const removeItem = payload => ({
  type: REMOVE_ITEM_REQUEST,
  payload,
})

export const fetchItem = payload => ({
  type: FETCH_ITEM_REQUEST,
  payload,
})

export const fetchItems = payload => ({
  type: FETCH_ITEMS_REQUEST,
  payload,
})

export const updateItemRequest = payload => ({
  type: UPDATE_ITEM_REQUEST,
  payload,
})

export const selectItem = payload => ({
  type: ITEM_SELECTED,
  payload,
})
