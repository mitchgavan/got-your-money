import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda'

import UserDetailsForm from '../../components/UserDetailsForm'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'

const Intro = styled.div`
  padding: 20px;
  font-size: large;
`;

const renderItems = item => <ExpenseItem key={item.id} {...item} />

export default ({ changePage, addItem, removeItem, items }) => (
  <div>
    <Intro>
      <ButtonLink onClick={() => changePage()}>
        Go to about page via redux
      </ButtonLink>
    </Intro>
    <UserDetailsForm
      onAddClick={addItem}
      onRemoveClick={removeItem}
    />
    {map(renderItems, items)}
  </div>
)
