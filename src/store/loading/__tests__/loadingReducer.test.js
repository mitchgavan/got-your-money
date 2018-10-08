import loadingReducer from '../loadingReducer'

describe('loadingReducer', () => {
  let state

  beforeEach(() => {
    state = {}
  })

  test('it should set action as loading when action contains REQUEST', () => {
    const action = {
      type: 'TEST_REQUEST',
    }
    const newState = {
      TEST: true,
    }

    expect(loadingReducer(state, action)).toEqual(newState)
  })

  test('it should set action as NOT loading when action contains SUCCESS', () => {
    state = {
      TEST: true,
    }
    const action = {
      type: 'TEST_SUCCESS',
    }
    const newState = {
      TEST: false,
    }

    expect(loadingReducer(state, action)).toEqual(newState)
  })

  test('it should set action as NOT loading when action contains ERROR', () => {
    state = {
      TEST: true,
    }
    const action = {
      type: 'TEST_ERROR',
    }
    const newState = {
      TEST: false,
    }

    expect(loadingReducer(state, action)).toEqual(newState)
  })

  test('it should not change the state if action does not contain SUCCESS, ERROR or REQUEST', () => {
    state = {
      TEST: true,
    }
    const action = {
      type: 'TEST_SOMETHING',
    }

    expect(loadingReducer(state, action)).toEqual(state)
  })
})
