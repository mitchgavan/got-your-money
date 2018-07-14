import createReducer from '../utilities/createReducer'
import { merge } from 'ramda'
import { addWeeks, subWeeks, startOfWeek } from 'date-fns/esm'
import { NEXT_WEEK, PREVIOUS_WEEK } from '../actions/types'

const initialState = {
    startOfWeek: startOfWeek(new Date(), { weekStartsOn: 1 })
}

const previousWeek = (state) => {
    const startOfWeek = subWeeks(state.startOfWeek, 1)
    return merge(state, { startOfWeek })
}

const nextWeek = (state) => {
    const startOfWeek = addWeeks(state.startOfWeek, 1)
    return merge(state, { startOfWeek })
}

export default createReducer(initialState, {
    [NEXT_WEEK]: nextWeek,
    [PREVIOUS_WEEK]: previousWeek
})