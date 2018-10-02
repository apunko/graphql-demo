import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import TodoItem from '../todo-item';
import { GET_TODO_LIST } from '../../queries';

const TodoList = ({ id }) => (
  <Query query={GET_TODO_LIST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { title, items } = data.todoList;
      const todoItems = items.map(item => <TodoItem key={item.id} title={item.title} />);

      return (
        <div>
          <h1>{title}</h1>
          {todoItems}
        </div>
      );
    }}
  </Query>
);

TodoList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TodoList;
