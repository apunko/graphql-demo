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
    <View>
      <Query query={GET_TODO_LIST} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) { return <Text>Loading...{title}-{id}</Text>; }
          if (error) { return <Text>Error!: ${error.toString()}</Text>; }

          const { todoItems } = data.todo;
          const updateCache = (cache: any, { data: { destroyedTodoItem } }: any) => {
            const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables: { id } });
            cache.writeQuery({
              query: GET_TODO_LIST,
              data: { todo: { ...todo,
                todoItems: todo.todoItems.filter((item: any) => item.id !== destroyedTodoItem.id) } },
            });
          };
          const items = todoItems.map((item: any) => (
            <TodoItem
              key={item.id}
              title={item.title}
              id={item.id}
              updateCache={updateCache}
            />
          ));

          return (
            <View>
              <Text>
                {title}-{id}
              </Text>
              <View>
                {items}
              </View>
            </View>
          );
        }}
      </Query>
    </View>
  );
};

export default TodoList;
