import { Auth } from 'aws-amplify'

const getCurrentSession = () => {
  return new Promise((resolve, reject) => {
    return Auth.currentSession()
      .then(session => resolve(session))
      .catch(err => reject(err))
  })
}

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    return Auth.currentAuthenticatedUser()
      .then(session => resolve(session))
      .catch(err => reject(err))
  })
}

const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    return Auth.signIn(username, password)
      .then(user => resolve(user))
      .catch(err => reject(err))
  })
}

export default {
  getCurrentSession,
  getCurrentUser,
  signIn,
}
