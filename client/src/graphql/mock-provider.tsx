import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_TODO_LIST, GET_ALL_TODO_LISTS } from '../queries';

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
          id: 1,
          title: 'First todo',
          items: [{ title: 'item', id: 123 }, { title: 'item2', id: 124 }],
        },
      },
    },
  },
  {
    request: {
      query: GET_TODO_LIST,
      variables: {
        id: 2,
      },
    },
    result: {
      data: {
        todoList: {
          id: 2,
          title: 'Second todo',
          items: [],
        },
      },
    },
  },
  {
    request: {
      query: GET_ALL_TODO_LISTS,
    },
    result: {
      data: {
        allTodoLists: [
          {
            id: 1,
            title: 'First todo',
          },
          {
            id: 2,
            title: 'Second todo',
          },
        ],
      },
    },
  },
];

const MockProvider = ({ children }: { children: React.ReactNode }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
);

export default MockProvider;
