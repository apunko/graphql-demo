import React from 'react';
import { Text } from 'react-native';

interface TodoItemProps {
  title: string;
  id: number;
}

const TodoItem = ({ title, id }: TodoItemProps) => (
  <Text>Item-{title}-{id}</Text>
);

export default TodoItem;
