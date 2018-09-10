import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import theme from './theme'
import Home from './scenes/home'
import Login from './scenes/login'
import About from './scenes/about'
import AddExpense from './scenes/addExpense'
import TopBar from './components/TopBar'
import NoMatch from './scenes/noMatch'
import Expense from './scenes/expense'
import { fetchItems } from './actions/items'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (
      !prevProps.authentication.isAuthenticated &&
      this.props.authentication.isAuthenticated
    ) {
      this.props.fetchItems()
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/expense/:id" component={Expense} />
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

const mapStateToProps = state => ({
  authentication: state.authentication,
})

const mapDispatchToProps = {
  fetchItems,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
