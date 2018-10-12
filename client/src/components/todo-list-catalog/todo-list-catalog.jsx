import React from 'react';
import PropTypes from 'prop-types';
import { Query, withApollo } from 'react-apollo';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import TodoListForm from '../todo-list-form';
import { GET_ALL_TODO_LISTS, GET_TODO_LIST } from '../../queries';
import { CREATE_TODO_LIST, UPDATE_TODO_LIST, UPDATE_TODO_ITEM } from '../../mutations';
import './todo-list-catalog.css';

class TodoListCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedId: null };

    this.handlePreviewSelect = this.handlePreviewSelect.bind(this);
    this.createTodoList = this.createTodoList.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateItemTitle = this.updateItemTitle.bind(this);
  }

  handlePreviewSelect(selectedId) {
    this.setState({ selectedId });
  }

  updateTitle(id, title) {
    this.props.client.mutate({
      mutation: UPDATE_TODO_LIST,
      variables: { id, title },
      update: (cache, { data: { updateTodo } }) => {
        const { allTodos } = cache.readQuery({ query: GET_ALL_TODO_LISTS });
        cache.writeQuery({
          query: GET_ALL_TODO_LISTS,
          data: { allTodos: allTodos.map(todo => (todo.id === updateTodo.id ? updateTodo : todo)) },
        });
      },
    });
  }

  updateItemTitle(id, title, listId) {
    this.props.client.mutate({
      mutation: UPDATE_TODO_ITEM,
      variables: { id, title },
      update: (cache, { data: { updateTodoItem } }) => {
        const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todo: {
            ...todo,
            todoItems: todo.todoItems.map(item => (item.id === updateTodoItem.id ? updateTodoItem : item)),
          } },
        });
      },
    });
  }

  createTodoList(title) {
    this.props.client.mutate({
      mutation: CREATE_TODO_LIST,
      variables: { title },
      update: (cache, { data: { createTodo } }) => {
        const { allTodos } = cache.readQuery({ query: GET_ALL_TODO_LISTS });
        cache.writeQuery({
          query: GET_ALL_TODO_LISTS,
          data: { allTodos: allTodos.concat([createTodo]) },
        });
      },
    }).then(({ data: { createTodo: { id } } }) => {
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
          const todoListPreviews = allTodos.map(list => (
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

TodoListCatalog.propTypes = {
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(TodoListCatalog);
