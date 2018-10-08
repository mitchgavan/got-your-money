import { any, path } from 'ramda'

// returns true only when all actions are not loading
export const createLoadingSelector = actions => state =>
  any(action => path(['loading', action], state))(actions)
