import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { GraphqlProvider } from '../graphql';
import TodoListCatalog from '../components/todo-list-catalog';

const App = () => (
  <GraphqlProvider>
    <Provider store={store}>
      <TodoListCatalog />
    </Provider>
  </GraphqlProvider>
);

export default App;
