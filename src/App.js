import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import UserDetailsForm from './components/UserDetailsForm';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.div`
  padding: 20px;
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Got Your Money</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
        <UserDetailsForm />
      </div>
    );
  }
}

export default App;
