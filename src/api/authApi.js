import { Auth } from 'aws-amplify'

const getCurrentSession = () => {
  return Auth.currentSession()
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
  signIn,
}
