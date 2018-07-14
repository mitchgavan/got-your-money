import {
  NEXT_WEEK,
  PREVIOUS_WEEK,
} from './types'

export const nextWeek = payload => ({
  type: NEXT_WEEK,
  payload
})

export const previousWeek = payload =>({
  type: PREVIOUS_WEEK,
  payload
})
