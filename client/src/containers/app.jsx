import React from 'react';
import { Provider } from '../graphql';
import TodoListCatalog from '../components/todo-list-catalog';

const App = () => (
  <Provider>
    <>
      <TodoListCatalog />
    </>
  </Provider>
);

export default App;
