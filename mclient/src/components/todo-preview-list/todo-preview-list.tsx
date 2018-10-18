import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import TodoListPreview from '../todo-list-preview';
import { GET_ALL_TODOS } from '../../queries';

interface TodoPreviewListProps {
  handleSelect(id: number, title: string): void;
}

const TodoPreviewList = ({ handleSelect }: TodoPreviewListProps) => (
  <Query query={GET_ALL_TODOS}>
    {({ loading, error, data }) => {
      if (loading) { return <Text>Loading todos...</Text>; }
      if (error) { return <Text>Error!: ${error.toString()}</Text>; }

      const { allTodos } = data;
      const todoListPreviews = allTodos.map((list: any) => (
        <TodoListPreview
          key={list.id}
          id={list.id}
          handleSelect={handleSelect}
          title={list.title}
        />
      ));

      return (
        <View>
          {todoListPreviews}
        </View>
      );
    }}
  </Query>
);

export default TodoPreviewList;
