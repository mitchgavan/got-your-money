import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Amplify from 'aws-amplify'
import configuration from './aws-exports'
import store, { history } from './store'
import App from './App'
import { unregister } from './registerServiceWorker'
import 'normalize.css'
import './theme/index.css'

Amplify.configure(configuration)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

unregister()
