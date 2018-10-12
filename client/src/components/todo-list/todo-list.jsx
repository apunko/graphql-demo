import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import EditableLabel from 'react-inline-edition';
import TodoItem from '../todo-item';
import TodoItemForm from '../todo-item-form';
import { GET_TODO_LIST } from '../../queries';
import './todo-list.css';

const TodoList = ({ id, updateTitle, updateItemTitle }) => {
  const onFocusOut = title => (updateTitle(id, title));

  return (
    <Query query={GET_TODO_LIST} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;

        const { title, todoItems } = data.todo;
        const items = todoItems.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            listId={id}
            updateTitle={updateItemTitle}
          />
        ));

        return (
          <div>
            <div className="todo-title">
              <EditableLabel text={title} onFocusOut={onFocusOut} />
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
};

TodoList.propTypes = {
  id: PropTypes.number.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateItemTitle: PropTypes.func.isRequired,
};

export default TodoList;
