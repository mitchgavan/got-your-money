import { Auth } from 'aws-amplify'

const getCurrentSession = () => {
  return Auth.currentSession()
}

export default {
  getCurrentSession,
}
