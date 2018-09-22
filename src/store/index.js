import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createHistory from 'history/createBrowserHistory'
// import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import rootReducer from './rootReducer'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
// const enhancers = [persistState()]
const middleware = [sagaMiddleware, routerMiddleware(history)]

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware)
  // ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)

// start saga generators
sagaMiddleware.run(sagas)

export default store
