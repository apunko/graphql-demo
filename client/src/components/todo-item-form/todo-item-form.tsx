import * as React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

interface TodoItemFormProps {
  listId: number,
}

interface TodoListFormState {
  title: string,
}

class TodoItemForm extends React.Component<TodoItemFormProps, TodoListFormState> {
  constructor(props: TodoItemFormProps) {
    super(props);

    this.state = { title: '' };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ title: event.currentTarget.value });
  }

  render() {
    const { listId } = this.props;

    return (
      <Mutation
        mutation={CREATE_TODO_ITEM}
        update={(cache, { data: { createTodoItem } }) => {
          const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
          cache.writeQuery({
            query: GET_TODO_LIST,
            data: { todo: { ...todo, todoItems: todo.todoItems.concat([createTodoItem]) } },
          });
        }}
      >
        {createTodoItem => (
          <form onSubmit={(e) => {
            e.preventDefault();
            createTodoItem({ variables: { todoId: listId, title: this.state.title } });
            this.setState({ title: '' });
          }}
          >
            <input name="title" required type="text" value={this.state.title} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
        )}
      </Mutation>
    );
  }
}

export default TodoItemForm;
