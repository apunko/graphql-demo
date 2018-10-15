import * as React from 'react';
import { Mutation } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import { CREATE_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

interface TodoItemFormProps {
  listId: number;
}

interface TodoListFormState {
  title: string;
}

class TodoItemForm extends React.Component<TodoItemFormProps, TodoListFormState> {
  constructor(props: TodoItemFormProps) {
    super(props);

    this.state = { title: '' };
  }

  public render(): React.ReactNode {
    const { listId } = this.props;
    const updateTodoItem = (cache: InMemoryCache, { data: { createTodoItem } }: TCreateTodoItemResult) => {
      const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
      cache.writeQuery({
        query: GET_TODO_LIST,
        data: { todo: { ...todo, todoItems: todo.todoItems.concat([createTodoItem]) } },
      });
    };

    return (
      <Mutation
        mutation={CREATE_TODO_ITEM}
        update={updateTodoItem}
      >
        {(createTodoItem: any) => {
          const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            createTodoItem({ variables: { todoId: listId, title: this.state.title } });
            this.setState({ title: '' });
          };

          return (
            <form onSubmit={onSubmit}>
              <input name='title' required={true} type='text' value={this.state.title} onChange={this.handleChange} />
              <input type='submit' value='Add' />
            </form>
         );
        }}
      </Mutation>
    );
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ title: event.currentTarget.value });
  }
}

export default TodoItemForm;
