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
})
