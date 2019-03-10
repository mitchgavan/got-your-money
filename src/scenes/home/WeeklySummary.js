import React from 'react';
import { compose } from 'ramda';
import addDays from 'date-fns/fp/addDays';
import formatWithOptions from 'date-fns/fp/formatWithOptions';
import Text from '../../components/Text';
import Block from '../../components/Block';

const formatDate = formatWithOptions({}, 'EEE do MMM');

const formatEndOfWeekDate = compose(
  formatDate,
  addDays(6)
);

export default ({ startOfWeek }) => (
  <Block textAlign="center" py={3}>
    <Text fontSize={2} mb={1}>
      Current Week
    </Text>
    <Text fontSize={3}>
      {formatDate(startOfWeek)} - {formatEndOfWeekDate(startOfWeek)}
    </Text>
  </Block>
);
