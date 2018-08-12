import { compose, filter, pluck, sum } from 'ramda'
import { isNumber } from './helpers'

export const getTotalCost = compose(
  sum,
  filter(isNumber),
  pluck('cost')
)
