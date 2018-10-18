import * as React from 'react';
import { Query, withApollo } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import { WithApolloClient } from 'react-apollo/withApollo';
import { connect } from 'react-redux';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import TodoListForm from '../todo-list-form';
import { GET_ALL_TODO_LISTS, GET_TODO_LIST } from '../../queries';
import { CREATE_TODO_LIST, UPDATE_TODO_LIST, UPDATE_TODO_ITEM } from '../../mutations';
import { SelectTodo } from '../../actions';
import './todo-list-catalog.css';

interface TodoListCatalogProps {
  selectedId: number;
  selectTodo(id: number): void;
}

const TodoListCatalog = ({ selectedId, selectTodo, client }: WithApolloClient<TodoListCatalogProps>) => {
  const handlePreviewSelect = (id: number) => {
    selectTodo(id);
  };

  const updateTitle = (id: number, title: string) => {
    client.mutate({
      mutation: UPDATE_TODO_LIST,
      variables: { id, title },
      update: (cache: InMemoryCache, { data: { updateTodo } }: TUpdateTodoResult) => {
        const { allTodos } = cache.readQuery({ query: GET_ALL_TODO_LISTS });
        cache.writeQuery({
          query: GET_ALL_TODO_LISTS,
          data: { allTodos: allTodos.map((todo: TTodoList) => (todo.id === updateTodo.id ? updateTodo : todo)) },
        });
      },
    });
  };

  const updateItemTitle = (id: number, title: string, listId: number) => {
    client.mutate({
      mutation: UPDATE_TODO_ITEM,
      variables: { id, title },
      update: (cache: InMemoryCache, { data: { updateTodoItem } }: TUpdateTodoItemResult) => {
        const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todo: {
            ...todo,
            todoItems: todo.todoItems.map((item: TTodoItem) => (item.id === updateTodoItem.id ? updateTodoItem : item)),
          } },
        });
      },
    });
  };

  const createTodoList = (title: string) => {
    client.mutate({
      mutation: CREATE_TODO_LIST,
      variables: { title },
      update: (cache: InMemoryCache, { data: { createTodo } }: TCreateTodoResult) => {
        const { allTodos } = cache.readQuery({ query: GET_ALL_TODO_LISTS });
        cache.writeQuery({
          query: GET_ALL_TODO_LISTS,
          data: { allTodos: allTodos.concat([createTodo]) },
        });
      },
    }).then(({ data: { createTodo: { id } } }: { data: { createTodo: { id: number } }}) => {
      handlePreviewSelect(id);
    });
  };

  return (
    <Query query={GET_ALL_TODO_LISTS}>
      {({ loading, error, data }) => {
        if (loading) { return null; }
        if (error) { return `Error!: ${error}`; }

        const { allTodos } = data;
        const todoListPreviews = allTodos.map((list: TTodoList) => (
          <TodoListPreview
            key={list.id}
            id={list.id}
            handleClick={handlePreviewSelect}
            title={list.title}
          />
        ));

        return (
          <div className='catalog'>
            <TodoListForm createTodoList={createTodoList} />
            { !selectedId ? 'Select your todo' :
              <TodoList id={selectedId} updateTitle={updateTitle} updateItemTitle={updateItemTitle} />
            }
            <div className='previews'>
              {todoListPreviews}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

const mapStateToProps = (state: any) => ({
  selectedId: state.selectedTodoId,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectTodo: (id: number) => dispatch(SelectTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(TodoListCatalog));
