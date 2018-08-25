import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './scenes/home'
import Login from './scenes/login'
import About from './scenes/about'
import AddExpense from './scenes/addExpense'
import TopBar from './components/TopBar'
import NoMatch from './scenes/noMatch'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/add-expense" component={AddExpense} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
