import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item';

const TodoList = ({ title, items }) => {
  const todoItems = items.map(item => <TodoItem key={item.id} title={item.title} />);

  return (
    <div>
      <h1>{title}</h1>
      {todoItems}
    </div>
  );
};

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
