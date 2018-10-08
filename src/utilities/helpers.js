import { compose, filter, pluck, sum } from 'ramda'

export const isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export const getTotalCost = compose(
  sum,
  filter(isNumber),
  pluck('cost')
)
