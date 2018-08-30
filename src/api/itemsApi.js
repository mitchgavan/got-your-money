import { API } from 'aws-amplify'

const getAll = () => {
  return API.get('expensesCRUD', '/expenses')
}

const getOne = id => {
  return API.get('expensesCRUD', `/expenses/object/${id}`)
}

const createItem = data => {
  return API.post('expensesCRUD', '/expenses', { body: data })
}

const deleteItem = id => {
  return API.del('expensesCRUD', `/expenses/object/${id}`)
}

export default {
  getAll,
  getOne,
  createItem,
  deleteItem,
}
