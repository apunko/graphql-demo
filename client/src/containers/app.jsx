import React from 'react';
import { Provider } from '../graphql';
import TodoListCatalog from '../components/todo-list-catalog';

const App = () => (
  <Provider>
    <div>
      <h2>My first Apollo app</h2>
      <TodoListCatalog />
    </div>
  </Provider>
);

export default App;
