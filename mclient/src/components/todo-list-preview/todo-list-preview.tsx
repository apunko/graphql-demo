import React from 'react';
import { Button } from 'react-native';

interface TodoListPreviewProps {
  id: number;
  title: string;
  handleSelect(id: number, title: string): void;
}

const TodoListPreview = ({ id, title, handleSelect }: TodoListPreviewProps) => {
  return (
    <Button onPress={() => { handleSelect(id, title); }} title={`${id}-${title}`} />
  );
};

export default TodoListPreview;
