import React from 'react';
import { Mutation } from 'react-apollo';
import { Text, Button } from 'react-native';
import DESTROY_TODO_ITEM from '../../mutations/destroy-todo-item';
import { GET_TODO_LIST } from '../../queries';

interface TodoItemProps {
  title: string;
  id: number;
  updateCache(cache: any, data: any): void;
}

const TodoItem = ({ title, id, updateCache }: TodoItemProps) => {
  return (
    <>
      <Text>Item-{title}-{id}</Text>
      <Mutation
        mutation={DESTROY_TODO_ITEM}
        update={updateCache}
      >
        {(destroyTodoItem: any) => (
          <Button onPress={() => { destroyTodoItem({ variables: { id } }); }} title='Destroy' />
        )}
      </Mutation>
    </>
  );
};

export default TodoItem;
