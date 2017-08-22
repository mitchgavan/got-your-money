import { prepend, slice } from 'ramda'

// const initialState = {
//   expenseItems: []
// }

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return prepend({
        id: action.id,
        title: action.title,
        cost: action.cost
      }, state)
    case 'REMOVE_ITEM':
      return slice(0, -1, state)

    default:
      return state
  }
}
