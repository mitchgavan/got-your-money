import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserDetailsForm from '../UserDetailsForm';

test('It renders correctly', () => {
  const tree = shallow(
    <UserDetailsForm />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
