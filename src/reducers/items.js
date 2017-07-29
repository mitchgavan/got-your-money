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
          title: action.title,
          cost: action.cost
        }
      ]
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, state.length - 1),
      ];

    default:
      return state
  }
}
