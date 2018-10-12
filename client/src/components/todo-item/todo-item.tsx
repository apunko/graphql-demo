import * as React from 'react';
import { Mutation } from 'react-apollo';
import EditableLabel from 'react-inline-edition';
import { InMemoryCache } from 'apollo-boost';
import { DESTROY_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

interface TodoItemProps {
  title: string;
  listId: number;
  id: number;
  updateTitle(id: number, title: string, listId: number): void;
}

const TodoItem = ({ title, listId, id, updateTitle }: TodoItemProps) => {
  const onFocusOut = (text: string) => (updateTitle(id, text, listId));
  const updateCache = (cache: InMemoryCache, { data: { destroyTodoItem } }: TDestroyTodoItemResult) => {
    const { todoList } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
    cache.writeQuery({
      query: GET_TODO_LIST,
      data: { todoList: { ...todoList, todoItems: destroyTodoItem.todoItems } },
    });
  };

  return (
    <li>
      <EditableLabel text={title} onFocusOut={onFocusOut} />
      <Mutation
        mutation={DESTROY_TODO_ITEM}
        update={updateCache}
      >
        {(destroyTodoItem: any) => {
          const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            destroyTodoItem({ variables: { id } });
          };

          return (
            <button
              type='button'
              className='remove'
              onClick={onClick}
            >
            ×
            </button>
          );
        }}
      </Mutation>
    </li>
  );
};

export default TodoItem;
