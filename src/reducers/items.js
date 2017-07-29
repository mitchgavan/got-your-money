export const ADD_ITEM = 'items/ADD_ITEM'

// const initialState = {
//   expenseItems: []
// }

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}
