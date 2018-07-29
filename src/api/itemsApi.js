import { API } from 'aws-amplify'

const getAll = () => {
  return API.get('expensesCRUD', '/expenses')
}

const createItem = data => {
  return API.post('expensesCRUD', '/expenses', { body: data })
}

const deleteItem = id => {
  return API.del('expensesCRUD', `/expenses/object/${id}`)
}

export default {
  getAll,
  createItem,
  deleteItem,
}
