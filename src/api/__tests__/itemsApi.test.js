import itemsApi from '../itemsApi'
import awsAmplify from 'aws-amplify'

jest.mock('aws-amplify')

describe('itemsApi', () => {
  describe('getAll', () => {
    const response = ['test1', 'test2']
    const error = {
      message: 'error',
    }

    awsAmplify.API.get
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with a list of items when successful', () => {
      return itemsApi.getAll().then(items => expect(items).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return itemsApi.getAll().catch(err => expect(err).toEqual(error))
    })
  })

  describe('getOne', () => {
    const response = {
      id: '1',
      name: 'test',
    }
    const error = {
      message: 'error',
    }

    awsAmplify.API.get
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with an item when successful', () => {
      return itemsApi.getOne('1').then(items => expect(items).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return itemsApi.getOne('1').catch(err => expect(err).toEqual(error))
    })
  })

  describe('createItem', () => {
    const item = {
      id: '1',
      name: 'test',
    }
    const response = {
      body: item,
    }
    const error = {
      message: 'error',
    }

    awsAmplify.API.post
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with the new item when successful', () => {
      return itemsApi
        .createItem(item)
        .then(items => expect(items).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return itemsApi.createItem(item).catch(err => expect(err).toEqual(error))
    })
  })

  describe('deleteItem', () => {
    const response = {}
    const error = {
      message: 'error',
    }

    awsAmplify.API.del
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with the response when successful', () => {
      return itemsApi
        .deleteItem('1')
        .then(items => expect(items).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return itemsApi.deleteItem('1').catch(err => expect(err).toEqual(error))
    })
  })

  describe('updateItem', () => {
    const item = {
      id: '1',
      name: 'test',
    }
    const response = {
      body: item,
    }
    const error = {
      message: 'error',
    }

    awsAmplify.API.put
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with the updated item when successful', () => {
      return itemsApi
        .updateItem(item)
        .then(items => expect(items).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return itemsApi.updateItem(item).catch(err => expect(err).toEqual(error))
    })
  })
})
