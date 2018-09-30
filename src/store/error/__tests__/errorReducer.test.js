import errorReducer from '../errorReducer'

describe('errorReducer', () => {
  test('it should set action error message when action contains ERROR', () => {
    const state = {}
    const action = {
      type: 'TEST_ERROR',
      payload: {
        message: 'something went wrong',
      },
    }
    const newState = {
      TEST: 'something went wrong',
    }

    expect(errorReducer(state, action)).toEqual(newState)
  })

  test('it should clear action error message when action contains REQUEST', () => {
    const state = {
      TEST: 'something went wrong',
    }
    const action = {
      type: 'TEST_REQUEST',
    }
    const newState = {
      TEST: '',
    }

    expect(errorReducer(state, action)).toEqual(newState)
  })

  test('it should not change state when action type does not include REQUEST or ERROR', () => {
    const state = {
      TEST: 'something went wrong',
    }
    const action = {
      type: 'TEST_SOMETHING',
    }

    expect(errorReducer(state, action)).toEqual(state)
  })
})
