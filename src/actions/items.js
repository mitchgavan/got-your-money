import {
    ADD_ITEM,
    REMOVE_ITEM,
    FETCH_ITEMS_REQUEST,
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

  export const fetchItems = payload => ({
    type: FETCH_ITEMS_REQUEST,
    payload
  })
