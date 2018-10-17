import React from 'react';
import { Mutation } from 'react-apollo';
import { Text, Button, View, StyleSheet } from 'react-native';
import DESTROY_TODO_ITEM from '../../mutations/destroy-todo-item';

interface TodoItemProps {
  title: string;
  id: number;
  updateCache(cache: any, data: any): void;
}

const TodoItem = ({ title, id, updateCache }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Mutation
        mutation={DESTROY_TODO_ITEM}
        update={updateCache}
      >
        {(destroyTodoItem: any) => (
          <Button onPress={() => { destroyTodoItem({ variables: { id } }); }} title='Destroy' />
        )}
      </Mutation>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    paddingTop: 8,
  },
});

export default TodoItem;
