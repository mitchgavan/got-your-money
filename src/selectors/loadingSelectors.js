import { any, path } from 'ramda'

export const createLoadingSelector = actions => state => {
  // returns true only when all actions is not loading
  return any(action => path(['loading', action], state))(actions)
}
