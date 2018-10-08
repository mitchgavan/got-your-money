import { FETCH_ITEM_SUCCESS } from '../currentExpenseActions'
import expenseReducer from '../currentExpenseReducer'

describe('currentExpense Reducer', () => {
  let prevState

  beforeEach(() => {
    prevState = {
      id: '',
      title: '',
      cost: '',
      date: '',
    }
  })

  describe('fetchItemSuccess', () => {
    it('should update the current expense', () => {
      const action = {
        type: FETCH_ITEM_SUCCESS,
        payload: {
          id: '1',
          title: 'Food',
          cost: '2',
          date: '2018-07-28T14:00:00.000Z',
        },
      }

      expect(expenseReducer(prevState, action)).toEqual(action.payload)
    })
  })
})
