import React from 'react';
import { Query } from 'react-apollo';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import { GET_ALL_TODO_LISTS } from '../../queries';

const TodoListCatalog = () => (
  <Query query={GET_ALL_TODO_LISTS}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const todoLists = data.allTodoLists;
      const todoListPreviews = todoLists.map(list => <TodoListPreview key={list.id} id={list.id} title={list.title} />);

      return (
        <div>
          <h1>All todo lists</h1>
          <TodoList id={todoListPreviews[0].props.id} />
          {todoListPreviews}
        </div>
      );
    }}
  </Query>
);

export default TodoListCatalog;
