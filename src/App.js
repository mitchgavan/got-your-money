import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { withAuthenticator } from 'aws-amplify-react'
import theme from './theme'
import Home from './scenes/home'
import About from './scenes/about'
import AddExpense from './scenes/addExpense'
import TopBar from './components/TopBar'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopBar />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-expense" component={AddExpense} />
            <Route exact path="/about" component={About} />
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default withAuthenticator(App)
