import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import TodoItem from '../todo-item';
import TodoItemForm from '../todo-item-form';
import { GET_TODO_LIST } from '../../queries';

const TodoList = ({ id }) => (
  <Query query={GET_TODO_LIST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { title, todoItems } = data.todoList;
      const items = todoItems.map(item => <TodoItem key={item.id} title={item.title} />);

      return (
        <div>
          <h1>{title}</h1>
          <TodoItemForm listId={id} />
          {items}
        </div>
      );
    }}
  </Query>
);

TodoList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TodoList;
