import { createSelector } from 'reselect'
import { and, filter, gte, lt, prop, sort } from 'ramda'
import { differenceInDays } from 'date-fns'
import { getTotalCost } from '../utilities/calculations'

const dateDiff = (a, b) => new Date(prop('date', b)) - new Date(prop('date', a))

const getItems = state => state.items
const getDate = state => state.date

export const getItemsOrderedByDate = createSelector(
  [ getItems ],
  (items) => sort(dateDiff, items)
)

export const getItemsForCurrentWeek = createSelector(
  [ getDate, getItemsOrderedByDate ],
  (date, items) => {
    const isItemFromCurrentWeek = item => {
      const numberOfDaysSinceStartOfWeek = differenceInDays(item.date, date.startOfWeek)
      return and(
        gte(numberOfDaysSinceStartOfWeek, 0),
        lt(numberOfDaysSinceStartOfWeek, 7)
      )
    }

    return filter(isItemFromCurrentWeek, items)
  }
)

export const getItemsTotalCost = createSelector(
  [ getItems ],
  getTotalCost
)

export const getItemsTotalCostForCurrentWeek = createSelector(
  [ getItemsForCurrentWeek ],
  getTotalCost
)