import axios from 'axios'
import { API } from 'aws-amplify'

const getAll = () => {
  return API.get('expensesCRUD', '/expenses')
}

const createItem = data => {
  return API.post('expensesCRUD', '/expenses', { body: data })
}

const deleteItem = id => {
  return axios({
    method: 'delete',
    url: `${process.env.REACT_APP_ITEMS_ENDPOINT}/${id}`,
  })
}

export default {
  getAll,
  createItem,
  deleteItem,
}
