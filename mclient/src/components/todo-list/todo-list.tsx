import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Query } from 'react-apollo';
import { GET_TODO_LIST } from '../../queries';
import TodoItem from '../todo-item';
import TodoItemForm from '../todo-item-form';
import ApolloCacheService from '../../services/apollo-cache-service';

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
          const items = todoItems.map((item: any) => (
            <TodoItem
              key={item.id}
              title={item.title}
              id={item.id}
              updateCache={ApolloCacheService.onItemDestroy.bind(null, { id })}
            />
          ));

          return (
            <View style={styles.container}>
              <Text style={styles.title}>
                {title}-{id}
              </Text>
              <TodoItemForm listId={id} updateCache={ApolloCacheService.onItemAdd.bind(null, { id })} />
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default TodoList;
