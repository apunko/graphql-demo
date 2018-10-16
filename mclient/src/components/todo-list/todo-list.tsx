import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import { GET_TODO_LIST } from '../../queries';
import TodoItem from '../todo-item';

interface TodoListProps {
  id: number;
  title: string;
}

const TodoList = ({ id, title }: TodoListProps) => {
  return (
    <Query query={GET_TODO_LIST} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) { return <Text>Loading...{title}-{id}</Text>; }
        if (error) { return <Text>Error!: ${error.toString()}</Text>; }

        const { todoItems } = data.todo;
        const items = todoItems.map((item: any) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
          />
        ));

        return (
          <>
            <Text>
              {title}-{id}
            </Text>
            <View>
              {items}
            </View>
          </>
        );
      }}
    </Query>
  );
};

export default TodoList;
