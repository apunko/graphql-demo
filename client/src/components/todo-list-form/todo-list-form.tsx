import * as React from 'react';

interface TodoListFormState {
  title: string,
}

interface TodoListFormProps {
  createTodoList(title: string): void,
}

class TodoListForm extends React.Component<TodoListFormProps, TodoListFormState> {
  constructor(props: TodoListFormProps) {
    super(props);

    this.state = { title: '' };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ title: event.currentTarget.value });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

export default TodoListForm;
