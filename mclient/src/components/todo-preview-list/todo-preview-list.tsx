import React from 'react';
import { View } from 'react-native';
import TodoListPreview from '../todo-list-preview';

interface TodoPreviewListProps {
  handleSelect(id: number, title: string): void;
}

const TodoPreviewList = ({ handleSelect }: TodoPreviewListProps) => {
  const todos = [{ id: 3, title: '123' }, { id: 5, title: '123' }];
  const todoListPreviews = todos.map((list) => (
    <TodoListPreview
      key={list.id}
      id={list.id}
      title={list.title}
      handleSelect={handleSelect}
    />
  ));

  return (
    <View>
      {todoListPreviews}
    </View>
  );
};

export default TodoPreviewList;
