import { prepend, filter } from 'ramda'

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
      //TODO make more declarative
      return filter(item => item.id !== action.id, state)

    default:
      return state
  }
}
