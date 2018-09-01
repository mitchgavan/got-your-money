import { API } from 'aws-amplify'

const getAll = () => {
  return API.get('expensesCRUD', '/expenses')
}

const getOne = id => {
  return new Promise((resolve, reject) => {
    return API.get('expensesCRUD', `/expenses/object/${id}`)
      .then(res => {
        res.id ? resolve(res) : reject('No item found')
      })
      .catch(err => reject(err))
  })
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
