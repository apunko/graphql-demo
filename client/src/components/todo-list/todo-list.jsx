import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import TodoItem from '../todo-item';
import TodoItemForm from '../todo-item-form';
import { GET_TODO_LIST } from '../../queries';
import './todo-list.css';

const TodoList = ({ id }) => (
  <Query query={GET_TODO_LIST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { title, todoItems } = data.todo;
      const items = todoItems.map(item => <TodoItem key={item.id} title={item.title} id={item.id} listId={id} />);

      return (
        <div>
          <div className="todo-title">
            <h1>{title}</h1>
          </div>
          <TodoItemForm listId={id} />
          <ul>
            {items}
          </ul>
        </div>
      );
    }}
  </Query>
);

TodoList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TodoList;
