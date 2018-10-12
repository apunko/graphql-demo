import * as React from 'react';
import { Query, withApollo } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { WithApolloClient } from 'react-apollo/withApollo';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import TodoListForm from '../todo-list-form';
import { GET_ALL_TODO_LISTS, GET_TODO_LIST } from '../../queries';
import { CREATE_TODO_LIST, UPDATE_TODO_LIST, UPDATE_TODO_ITEM } from '../../mutations';
import './todo-list-catalog.css';

interface TodoListCatalogProps {}

interface TodoListCatalogState {
  selectedId: number,
}

class TodoListCatalog extends React.Component<WithApolloClient<TodoListCatalogProps>, TodoListCatalogState> {
  constructor(props: WithApolloClient<TodoListCatalogProps>) {
    super(props);

    this.state = { selectedId: null };

    this.handlePreviewSelect = this.handlePreviewSelect.bind(this);
    this.createTodoList = this.createTodoList.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateItemTitle = this.updateItemTitle.bind(this);
  }

  handlePreviewSelect(selectedId: number) {
    this.setState({ selectedId });
  }

  updateTitle(id: number, title: string) {
    this.props.client.mutate({
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
  }

  updateItemTitle(id: number, title: string, listId: number) {
    this.props.client.mutate({
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
  }

  createTodoList(title: string) {
    this.props.client.mutate({
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
      this.setState({ selectedId: id });
    });
  }

  render() {
    return (
      <Query query={GET_ALL_TODO_LISTS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          const { allTodos } = data;
          const todoListPreviews = allTodos.map((list: TTodoList) => (
            <TodoListPreview
              key={list.id}
              id={list.id}
              handleClick={this.handlePreviewSelect}
              title={list.title}
            />
          ));
          const selectedId = this.state.selectedId || allTodos[0].id;

          return (
            <div className="catalog">
              <TodoListForm createTodoList={this.createTodoList} />
              <TodoList id={selectedId} updateTitle={this.updateTitle} updateItemTitle={this.updateItemTitle} />
              <div className="previews">
                {todoListPreviews}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(TodoListCatalog);
