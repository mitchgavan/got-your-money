export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST'
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS'
export const FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR'

export const fetchItem = payload => ({
  type: FETCH_ITEM_REQUEST,
  payload,
})
