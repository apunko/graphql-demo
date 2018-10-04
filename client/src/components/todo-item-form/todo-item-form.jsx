import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { CREATE_TODO_ITEM } from '../../mutations';

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
    return (
      <Mutation mutation={CREATE_TODO_ITEM}>
        {createTodoItem => (
          <form onSubmit={(e) => {
            e.preventDefault();
            createTodoItem({ variables: { id: this.props.listId, title: this.state.title } });
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
