import {
  prepend,
  reject,
  eqProps
} from 'ramda'
import createReducer from '../utilities/createReducer'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  FETCH_ITEMS_REQUESTED,
  FETCH_ITEMS_SUCCEEDED,
  FETCH_ITEMS_FAILED
} from '../actions/types'

const initialState = {
  fetching: false,
  message: null,
  items: []
}

const fetchItemsRequested = (state) => {
  return { ...state, fetching: true }
}

const fetchItemsSucceeded = (state, { payload }) => {
  return {
    ...state,
    items: payload,
    fetching: false
  }
}

const fetchItemsFailed = (state, { payload }) => {
  return {
    ...state,
    fetching: false,
    message: payload
  }
}

const addItem = (state, { payload }) => {
  const items = prepend({
    id: payload.id,
    title: payload.title,
    cost: payload.cost,
    date: payload.date,
  }, state.items)

  return { ...state, items }
}

const removeItem = (state, { payload }) => {
  const items = reject(eqProps('id', payload), state.items)
  return { ...state, items }
}
  

export default createReducer(initialState, {
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem,
  [FETCH_ITEMS_REQUESTED]: fetchItemsRequested,
  [FETCH_ITEMS_SUCCEEDED]: fetchItemsSucceeded,
  [FETCH_ITEMS_FAILED]: fetchItemsFailed
})
