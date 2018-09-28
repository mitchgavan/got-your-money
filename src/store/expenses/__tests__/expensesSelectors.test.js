import {
  getItemsOrderedByDate,
  getItemsForCurrentWeek,
  getNumberOfItems,
  getItemsTotalCost,
  getItemsTotalCostForCurrentWeek,
  makeGetItemById,
} from '../expensesSelectors'

describe('Expenses selectors', () => {
  let mockParams

  beforeEach(() => {
    mockParams = {
      items: [
        {
          date: '2018-09-03T14:00:00.000Z',
          id: '1',
          cost: '2',
        },
        {
          date: '2018-09-25T14:00:00.000Z',
          id: '2',
          cost: '2.5',
        },
        {
          date: '2018-10-10T14:00:00.000Z',
          id: '3',
          cost: '5.5',
        },
      ],
      date: {
        startOfWeek: '2018-09-23T14:00:00.000Z',
      },
    }
  })

  describe('getItemsOrderedByDate', () => {
    it('should return the items ordered by date', () => {
      const result = {
        items: [
          {
            date: '2018-10-10T14:00:00.000Z',
            id: '3',
            cost: '5.5',
          },
          {
            date: '2018-09-25T14:00:00.000Z',
            id: '2',
            cost: '2.5',
          },
          {
            date: '2018-09-03T14:00:00.000Z',
            id: '1',
            cost: '2',
          },
        ],
      }
      const selected = getItemsOrderedByDate.resultFunc(mockParams.items)
      expect(selected).toEqual(result.items)
    })

    it('should return null when items is undefined', () => {
      mockParams = {}
      const selected = getItemsOrderedByDate.resultFunc(mockParams.items)
      expect(selected).toEqual(null)
    })
  })

  describe('getItemsForCurrentWeek', () => {
    it('should return items with a date that falls in the current week', () => {
      const result = [
        {
          date: '2018-09-25T14:00:00.000Z',
          id: '2',
          cost: '2.5',
        },
      ]
      const selected = getItemsForCurrentWeek.resultFunc(
        mockParams.date,
        mockParams.items
      )
      expect(selected).toEqual(result)
    })

    it('should return null when items is undefined', () => {
      mockParams.items = undefined
      const selected = getItemsForCurrentWeek.resultFunc(
        mockParams.date,
        mockParams.items
      )
      expect(selected).toEqual(null)
    })
  })

  describe('getNumberOfItems', () => {
    it('should return the total number of items', () => {
      const selected = getNumberOfItems.resultFunc(mockParams.items)
      expect(selected).toEqual(mockParams.items.length)
    })

    it('should return 0 when items is undefined', () => {
      const selected = getNumberOfItems.resultFunc()
      expect(selected).toEqual(0)
    })
  })

  describe('getItemsTotalCost', () => {
    it('should return the total cost of all items', () => {
      const selected = getItemsTotalCost.resultFunc(mockParams.items)
      expect(selected).toEqual(10)
    })

    it('should return 0 when items is undefined', () => {
      const selected = getItemsTotalCost.resultFunc()
      expect(selected).toEqual(0)
    })
  })

  describe('getItemsTotalCostForCurrentWeek', () => {
    it('should return the total cost of items for the current week', () => {
      mockParams.items = [
        {
          date: '2018-09-25T14:00:00.000Z',
          id: '2',
          cost: '2.5',
        },
      ]

      const selected = getItemsTotalCostForCurrentWeek.resultFunc(
        mockParams.items
      )
      expect(selected).toEqual(2.5)
    })

    it('should return 0 when items is undefined', () => {
      const selected = getItemsTotalCostForCurrentWeek.resultFunc()
      expect(selected).toEqual(0)
    })
  })

  describe('makeGetItemById', () => {
    it('should return an item with matching ID', () => {
      const id = '2'
      const result = {
        date: '2018-09-25T14:00:00.000Z',
        id: '2',
        cost: '2.5',
      }
      const selected = makeGetItemById().resultFunc(id, mockParams.items)
      expect(selected).toEqual(result)
    })

    it('should return undefined if an item with that ID does not exist', () => {
      const id = '23'
      const selected = makeGetItemById().resultFunc(id, mockParams.items)
      expect(selected).toEqual(undefined)
    })
  })
})
