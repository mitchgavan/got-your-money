import {
  SET_WEEK,
} from './types'

export const setWeek = payload => {
  return {
    type: SET_WEEK,
    payload
  }
}
