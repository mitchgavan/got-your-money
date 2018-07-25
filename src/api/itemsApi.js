import axios from 'axios'

const getAll = () => {
    return axios({
        method: 'get',
        url: process.env.REACT_APP_ITEMS_ENDPOINT
    })
}

const createItem = (data) => {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_ITEMS_ENDPOINT,
        data
    })
}

const deleteItem = (id) => {
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