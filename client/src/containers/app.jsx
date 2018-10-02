import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../graphql/client';
import TodoList from '../components/todo-list';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
      <TodoList title="Test list" items={[{ id: 1, title: 'Test item' }]} />
    </div>
  </ApolloProvider>
);

export default App;
