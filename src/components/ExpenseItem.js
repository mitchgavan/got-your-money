import React from 'react';
import { format } from 'date-fns';
import { Box } from 'grid-styled';
import Text from './Text';
import InlineText from './InlineText';
import BlockLink from './BlockLink';
import theme from '../theme';

const { colors } = theme;

export default ({ title, cost, date, onClick }) => (
  <Box mb={2} px={[2, 1]} w={[1, 1, 1 / 2]}>
    <BlockLink onClick={onClick} bg={colors.white} p={[1, 2]}>
      <Text fontSize={2} mb={1}>
        {title}
      </Text>
      <Text fontSize={1} mb={1}>
        {format(date, 'dd/MM/yyyy')}
      </Text>
      <Text color="blue">${cost}</Text>
    </BlockLink>
  </Box>
);
