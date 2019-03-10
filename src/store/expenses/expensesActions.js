export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_ERROR = 'REMOVE_ITEM_ERROR';

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR';

export const addItem = payload => ({
  type: ADD_ITEM_REQUEST,
  payload,
});

export const removeItem = payload => ({
  type: REMOVE_ITEM_REQUEST,
  payload,
});

export const fetchItems = payload => ({
  type: FETCH_ITEMS_REQUEST,
  payload,
});

export const updateItemRequest = payload => ({
  type: UPDATE_ITEM_REQUEST,
  payload,
});
