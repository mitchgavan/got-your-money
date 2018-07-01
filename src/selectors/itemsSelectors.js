import { createSelector } from 'reselect'
import { prop, sort } from 'ramda'

const dateDiff = (a, b) => new Date(prop('date', b)) - new Date(prop('date', a))

const getItems = state => state.items

export const getItemsOrderedByDate = createSelector(
  [ getItems ],
  (items) => sort(dateDiff, items)
)
