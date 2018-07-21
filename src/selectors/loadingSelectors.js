import { any, path } from 'ramda'

// TODO look into using reselect here
export const createLoadingSelector = actions => state => {
  // returns true only when all actions is not loading
  return any(action => path(['loading', action], state))(actions)
}
