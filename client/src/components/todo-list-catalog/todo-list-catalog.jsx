import React from 'react';
import { Query } from 'react-apollo';
import TodoListPreview from '../todo-list-preview';
import TodoList from '../todo-list';
import { GET_ALL_TODO_LISTS } from '../../queries';
import './todo-list-catalog.css';

class TodoListCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedId: null };

    this.handlePreviewSelect = this.handlePreviewSelect.bind(this);
  }

  handlePreviewSelect(selectedId) {
    this.setState({ selectedId });
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

export default TodoListCatalog;
