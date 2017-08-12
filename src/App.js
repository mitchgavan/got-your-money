import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme';
import Home from './scenes/home'
import About from './scenes/about'
import TopBar from './components/TopBar'


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopBar />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
