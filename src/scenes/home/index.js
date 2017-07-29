import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserDetailsForm from '../../components/UserDetailsForm';

const Intro = styled.div`
  padding: 20px;
  font-size: large;
`;

const Home = props => (
  <div>
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </Intro>
    <UserDetailsForm />
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
