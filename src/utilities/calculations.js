import { compose, pluck, sum } from 'ramda'

export const getTotalCost = compose(sum, pluck('cost'))
