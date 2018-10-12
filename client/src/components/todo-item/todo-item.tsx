import * as React from 'react';
import { Mutation } from 'react-apollo';
import EditableLabel from 'react-inline-edition';
import { DESTROY_TODO_ITEM } from '../../mutations';
import { GET_TODO_LIST } from '../../queries';

interface TodoItemProps {
  title: string,
  listId: number,
  id: number,
  updateTitle(id: number, title: string, listId: number): void,
}

const TodoItem = ({ title, listId, id, updateTitle }: TodoItemProps) => {
  const onFocusOut = (text: string) => (updateTitle(id, text, listId));

  return (
    <li>
      <EditableLabel text={title} onFocusOut={onFocusOut} />
      <Mutation
        mutation={DESTROY_TODO_ITEM}
        update={(cache, { data: { destroyTodoItem } }) => {
          const { todoList } = cache.readQuery({ query: GET_TODO_LIST, variables: { id: listId } });
          cache.writeQuery({
            query: GET_TODO_LIST,
            data: { todoList: { ...todoList, todoItems: destroyTodoItem.todoItems } },
          });
        }}
      >
        {destroyTodoItem => (
          <button
            type="button"
            className="remove"
            onClick={(e) => {
              e.preventDefault();
              destroyTodoItem({ variables: { id } });
            }}
          >
          ×
          </button>
        )}
      </Mutation>
    </li>
  );
};

export default TodoItem;
