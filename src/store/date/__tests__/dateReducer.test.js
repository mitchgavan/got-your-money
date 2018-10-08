import dateReducer from '../dateReducer'
import { PREVIOUS_WEEK, NEXT_WEEK } from '../dateActions'

describe('date Reducer', () => {
  let prevState

  beforeEach(() => {
    prevState = {
      startOfWeek: '2018-10-07T13:00:00.000Z',
    }
  })

  describe('previousWeek', () => {
    it('should update the startOfWeek to the previous week', () => {
      const action = {
        type: PREVIOUS_WEEK,
        payload: {},
      }
      const newState = {
        startOfWeek: new Date('2018-09-30T14:00:00.000Z'),
      }
      expect(dateReducer(prevState, action)).toEqual(newState)
    })
  })

  describe('nextWeek', () => {
    it('should update the startOfWeek to the next week', () => {
      const action = {
        type: NEXT_WEEK,
        payload: {},
      }
      const newState = {
        startOfWeek: new Date('2018-10-14T13:00:00.000Z'),
      }
      expect(dateReducer(prevState, action)).toEqual(newState)
    })
  })
})
