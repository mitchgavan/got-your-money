import authApi from '../authApi'
import awsAmplify from 'aws-amplify'

jest.mock('aws-amplify')

describe('authApi', () => {
  describe('getCurrentSession', () => {
    const response = {
      accessToken: 'test',
    }
    const error = {
      message: 'error',
    }
    awsAmplify.Auth.currentSession
      .mockImplementationOnce(() => Promise.resolve(response))
      .mockImplementationOnce(() => Promise.reject(error))

    it('should return a promise with the current session when successful', () => {
      return authApi
        .getCurrentSession()
        .then(session => expect(session).toEqual(response))
    })

    it('should return a rejected promised when unsuccessful', () => {
      return authApi
        .getCurrentSession()
        .catch(err => expect(err).toEqual(error))
    })
  })
})
