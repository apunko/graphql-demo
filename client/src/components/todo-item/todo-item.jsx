import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { DESTROY_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

const TodoItem = ({ title, listId, id }) => (
  <li>
    {title}
    <Mutation
      mutation={DESTROY_TODO_ITEM}
      update={(cache, { data: { destroyTodoItem } }) => {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: { ...todoList, todoItems: destroyTodoItem.todoItems } },
        });
      }}
    >
      {destroyTodoItem => (
        <button
          type="button"
          className="remove"
          onClick={(e) => {
            e.preventDefault();
            destroyTodoItem({ variables: { id } });
          }}
        >
        ×
        </button>
      )}
    </Mutation>
  </li>
);

TodoItem.propTypes = {
  listId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoItem;
