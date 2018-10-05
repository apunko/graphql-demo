import React from 'react';
import PropTypes from 'prop-types';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createTodoList(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" required type="text" value={this.state.title} onChange={this.handleChange} />
        <input type="submit" value="Create" />
      </form>
    );
  }
}

TodoListForm.propTypes = {
  createTodoList: PropTypes.func.isRequired,
};

export default TodoListForm;
