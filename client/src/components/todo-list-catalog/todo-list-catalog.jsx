import React from 'react';
import PropTypes from 'prop-types';
import { Query, withApollo } from 'react-apollo';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import TodoListForm from '../todo-list-form';
import { GET_ALL_TODO_LISTS } from '../../queries';
import { CREATE_TODO_LIST } from '../../mutations';
import './todo-list-catalog.css';

class TodoListCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedId: null };

    this.handlePreviewSelect = this.handlePreviewSelect.bind(this);
    this.createTodoList = this.createTodoList.bind(this);
  }

  handlePreviewSelect(selectedId) {
    this.setState({ selectedId });
  }

  createTodoList(title) {
    this.props.client.mutate({
      mutation: CREATE_TODO_LIST,
      variables: { title },
      update: (cache, { data: { createTodoList } }) => {
        const { todoLists } = cache.readQuery({ query: GET_ALL_TODO_LISTS });
        cache.writeQuery({
          query: GET_ALL_TODO_LISTS,
          data: { todoLists: todoLists.concat([createTodoList]) },
        });
      },
    }).then(({ data: { createTodoList: { id } } }) => {
      this.setState({ selectedId: id });
    });
  }

  render() {
    return (
      <Query query={GET_ALL_TODO_LISTS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          const { todoLists } = data;
          const todoListPreviews = todoLists.map(list => (
            <TodoListPreview
              key={list.id}
              id={list.id}
              handleClick={this.handlePreviewSelect}
              title={list.title}
            />
          ));
          const selectedId = this.state.selectedId || todoLists[0].id;

          return (
            <div className="catalog">
              <TodoListForm createTodoList={this.createTodoList} />
              <TodoList id={selectedId} />
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
