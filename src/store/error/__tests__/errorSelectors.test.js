import { createErrorMessageSelector } from '../errorSelectors'

describe('createErrorMessageSelector', () => {
  test('it should return the first error message when there is an error', () => {
    const state = {
      error: {
        ADD: 'something went wrong',
        REMOVE: 'something else went wrong',
      },
    }

    const error = createErrorMessageSelector(['ADD', 'REMOVE'])(state)

    expect(error).toEqual(state.error.ADD)
  })

  test('it should return undefined when there is no error', () => {
    const state = {
      error: {
        ADD: '',
        REMOVE: '',
      },
    }

    const error = createErrorMessageSelector(['ADD', 'REMOVE'])(state)

    expect(error).toEqual(undefined)
  })
})
