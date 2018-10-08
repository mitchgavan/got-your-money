import { createLoadingSelector } from '../loadingSelectors'

describe('createLoadingSelector', () => {
  test('it should return true when an action is loading', () => {
    const state = {
      loading: {
        ADD: true,
        REMOVE: false,
      },
    }

    const isLoading = createLoadingSelector(['ADD', 'REMOVE'])(state)

    expect(isLoading).toEqual(true)
  })

  test('it should return false when all actions are not loading', () => {
    const state = {
      loading: {
        ADD: false,
        REMOVE: false,
      },
    }

    const isLoading = createLoadingSelector(['ADD', 'REMOVE'])(state)

    expect(isLoading).toEqual(false)
  })
})
