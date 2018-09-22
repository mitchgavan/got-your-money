export const NEXT_WEEK = 'NEXT_WEEK'
export const PREVIOUS_WEEK = 'PREVIOUS_WEEK'

export const nextWeek = payload => ({
  type: NEXT_WEEK,
  payload,
})

export const previousWeek = payload => ({
  type: PREVIOUS_WEEK,
  payload,
})
