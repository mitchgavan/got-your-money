import { createSelector } from 'reselect'
import { and, propEq, filter, find, gte, lt, prop, sort } from 'ramda'
import { differenceInDays } from 'date-fns'
import { getTotalCost } from '../../utilities/helpers'

const dateDiff = (a, b) => new Date(prop('date', b)) - new Date(prop('date', a))

const getItems = state => state.items
const getDate = state => state.date
const getItemId = (state, id) => id

export const getItemsOrderedByDate = createSelector([getItems], items => {
  if (!items) {
    return null
  }
  return sort(dateDiff, items)
})

export const makeGetItemById = () =>
  createSelector([getItemId, getItems], (id, items) => {
    return find(propEq('id', id), items)
  })

export const getItemsForCurrentWeek = createSelector(
  [getDate, getItemsOrderedByDate],
  (date, items) => {
    if (!items) {
      return null
    }

    const isItemFromCurrentWeek = item => {
      const numberOfDaysSinceStartOfWeek = differenceInDays(
        item.date,
        date.startOfWeek
      )
      return and(
        gte(numberOfDaysSinceStartOfWeek, 0),
        lt(numberOfDaysSinceStartOfWeek, 7)
      )
    }

    return filter(isItemFromCurrentWeek, items)
  }
)

export const getNumberOfItems = createSelector([getItems], items => {
  if (!items) {
    return 0
  }
  return items.length
})

export const getItemsTotalCost = createSelector([getItems], items => {
  if (!items) {
    return 0
  }
  return getTotalCost(items)
})

export const getItemsTotalCostForCurrentWeek = createSelector(
  [getItemsForCurrentWeek],
  items => {
    if (!items) {
      return 0
    }
    return getTotalCost(items)
  }
)
