import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';

ReactDOM.render(
  <TodoList title="Test list" items={[{ id: 1, title: 'Test item' }]} />,
  document.getElementById('app'),
);
