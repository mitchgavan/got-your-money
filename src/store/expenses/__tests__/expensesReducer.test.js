import items from '../../expenses/expensesReducer'
import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  FETCH_ITEMS_SUCCESS,
} from '../../expenses/expensesActions'

describe('itemsReducer', () => {
  let prevState

  beforeEach(() => {
    prevState = [
      {
        id: 23,
        title: 'Food',
        cost: '47',
        date: '2018-07-28T14:00:00.000Z',
      },
      {
        id: 7,
        title: 'Coffee',
        cost: '3',
        date: '2018-07-28T14:00:00.000Z',
      },
    ]
  })

  describe('addItemSuccess', () => {
    test('it successfully adds an item', () => {
      const action = {
        type: ADD_ITEM_SUCCESS,
        payload: {
          id: 1,
          title: 'Food',
          cost: '23',
          date: '2018-07-28T14:00:00.000Z',
        },
      }

      const state = [
        {
          id: 1,
          title: 'Food',
          cost: '23',
          date: '2018-07-28T14:00:00.000Z',
        },
        ...prevState,
      ]

      expect(items(prevState, action)).toEqual(state)
    })
  })

  describe('removeItemSuccess', () => {
    test('it successfully removes an item', () => {
      const action = {
        type: REMOVE_ITEM_SUCCESS,
        payload: 23,
      }

      const state = [
        {
          id: 7,
          title: 'Coffee',
          cost: '3',
          date: '2018-07-28T14:00:00.000Z',
        },
      ]

      expect(items(prevState, action)).toEqual(state)
    })

    test('it does NOT remove an item if there is no item with a matching ID', () => {
      const action = {
        type: REMOVE_ITEM_SUCCESS,
        payload: 11,
      }

      expect(items(prevState, action)).toEqual(prevState)
    })
  })

  describe('updateItemSuccess', () => {
    it('successfully updates an item', () => {
      const action = {
        type: UPDATE_ITEM_SUCCESS,
        payload: {
          id: 7,
          title: 'Changed',
          cost: '100',
        },
      }

      const state = [
        {
          id: 23,
          title: 'Food',
          cost: '47',
          date: '2018-07-28T14:00:00.000Z',
        },
        {
          id: 7,
          title: 'Changed',
          cost: '100',
          date: '2018-07-28T14:00:00.000Z',
        },
      ]

      expect(items(prevState, action)).toEqual(state)
    })
  })

  describe('fetchItemsSuccess', () => {
    it('successfully updates all items', () => {
      const action = {
        type: FETCH_ITEMS_SUCCESS,
        payload: [
          {
            id: 33,
            title: 'New Food',
            cost: '47',
            date: '2018-07-28T14:00:00.000Z',
          },
          {
            id: 72,
            title: 'New Coffee',
            cost: '3',
            date: '2018-07-28T14:00:00.000Z',
          },
        ],
      }

      expect(items(prevState, action)).toEqual(action.payload)
    })
  })
})
