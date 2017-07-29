import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda'

import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'

const Intro = styled.div`
  padding: 20px;
  font-size: large;
`;

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({ changePage, addItem, items }) => (
  <div>
    <Intro>
      <button onClick={() => changePage()}>
        Go to about page via redux
      </button>
    </Intro>
    <UserDetailsForm onClick={addItem} />
    {map(renderItems, items)}
  </div>
)
