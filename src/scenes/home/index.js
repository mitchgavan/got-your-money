import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addItem } from '../../actions';
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
    <UserDetailsForm onClick={props.addItem} />
    <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    {props.items.length > 0 && props.items.map(item => <div>{item.text}</div>)}
  </div>
)

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
