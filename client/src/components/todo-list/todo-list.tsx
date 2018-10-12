import * as React from 'react';
import { Query } from 'react-apollo';
import EditableLabel from 'react-inline-edition';
import TodoItem from '../todo-item';
import TodoItemForm from '../todo-item-form';
import { GET_TODO_LIST } from '../../queries';
import './todo-list.css';

interface TodoListProps {
  id: number;
  updateTitle(id: number, title: string): void;
  updateItemTitle(id: number, title: string, listId: number): void;
}

const TodoList = ({ id, updateTitle, updateItemTitle }: TodoListProps) => {
  const onFocusOut = (title: string) => (updateTitle(id, title));

  return (
    <Query query={GET_TODO_LIST} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) { return null; }
        if (error) { return `Error!: ${error}`; }

        const { title, todoItems } = data.todo;
        const items = todoItems.map((item: TTodoItem) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            listId={id}
            updateTitle={updateItemTitle}
          />
        ));

        return (
          <div>
            <div className='todo-title'>
              <EditableLabel text={title} onFocusOut={onFocusOut} />
            </div>
            <TodoItemForm listId={id} />
            <ul>
              {items}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default TodoList;
