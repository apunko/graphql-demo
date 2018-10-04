import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { CREATE_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

class TodoItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { listId } = this.props;

    return (
      <Mutation
        mutation={CREATE_TODO_ITEM}
        update={(cache, { data: { createTodoItem } }) => {
          const { todoList } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
          cache.writeQuery({
            query: GET_TODO_LIST,
            data: { todoList: { ...todoList, todoItems: todoList.todoItems.concat([createTodoItem]) } },
          });
        }}
      >
        {createTodoItem => (
          <form onSubmit={(e) => {
            e.preventDefault();
            createTodoItem({ variables: { id: listId, title: this.state.title } });
            this.setState({ title: '' });
          }}
          >
            <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
        )}
      </Mutation>
    );
  }
}

TodoItemForm.propTypes = {
  listId: PropTypes.number.isRequired,
};

export default TodoItemForm;
