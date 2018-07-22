import {
    ADD_ITEM_REQUEST,
    REMOVE_ITEM,
    FETCH_ITEMS_REQUEST,
  } from './types'
  
  export const addItem = payload => {
    return {
      type: ADD_ITEM_REQUEST,
      payload
    }
  }
  
  export const removeItem = payload => {
    return {
      type: REMOVE_ITEM,
      payload
    }
  }

  export const fetchItems = payload => ({
    type: FETCH_ITEMS_REQUEST,
    payload
  })
