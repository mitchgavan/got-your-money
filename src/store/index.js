import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'

export const history = createHistory()

const initialState = {}
const enhancers = [persistState()]
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
