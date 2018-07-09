import { createSelector } from 'reselect'
import { filter, gt, prop, sort } from 'ramda'
import { differenceInDays } from 'date-fns'

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
    const isItemFromCurrentWeek = item => 
    gt(differenceInDays(item.date, date.startOfWeek), 0)

    return filter(isItemFromCurrentWeek, items)
  }
)