import {
  prepend,
  reject,
  equals,
} from 'ramda'

// const initialState = {
//   expenseItems: []
// }

export default (state = [], action) => {

  const getItem = item => equals(item.id, action.id)

  switch (action.type) {
    case 'ADD_ITEM':
      return prepend({
        id: action.id,
        title: action.title,
        cost: action.cost
      }, state)
    case 'REMOVE_ITEM':
      return reject(getItem, state)

    default:
      return state
  }
}
