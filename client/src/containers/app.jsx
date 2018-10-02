import React from 'react';
import { Provider } from '../graphql';
import TodoList from '../components/todo-list';

const App = () => (
  <Provider>
    <div>
      <h2>My first Apollo app</h2>
      <TodoList id={1} />
    </div>
  </Provider>
);

export default App;
