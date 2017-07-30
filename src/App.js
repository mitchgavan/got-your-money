import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import theme from './theme';
import logo from './logo.svg'
import Home from './scenes/home'
import About from './scenes/about'


const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{textAlign: 'center'}}>
          <Header>
            <Logo src={logo} alt="logo" />
            <h2>Got Your Money</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Header>
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
