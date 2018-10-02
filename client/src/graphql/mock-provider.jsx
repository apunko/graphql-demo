import React from 'react';
import PropTypes from 'prop-types';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_TODO_LIST } from '../queries';

const mocks = [
  {
    request: {
      query: GET_TODO_LIST,
      variables: {
        id: 1,
      },
    },
    result: {
      data: {
        todoList: {
          title: 'First todo',
          items: [],
        },
      },
    },
  },
];

const MockProvider = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
);

MockProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MockProvider;
