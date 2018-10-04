import React from 'react';
import PropTypes from 'prop-types';

class TodoItemForm extends React.Component {
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

    this.props.handleItemAdd({ ...this.state });
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

TodoItemForm.propTypes = {
  handleItemAdd: PropTypes.func.isRequired,
};

export default TodoItemForm;
