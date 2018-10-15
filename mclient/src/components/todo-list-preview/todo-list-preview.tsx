import React from 'react';
import { Button } from 'react-native';

interface TodoListPreviewProps {
  id: number;
  title: string;
  handleSelect(id: number): void;
}

const TodoListPreview = ({ id, title, handleSelect }: TodoListPreviewProps) => {
  return (
    <Button onPress={() => {handleSelect(id)}} title={`${id}-${title}`} />
  );
};

export default TodoListPreview;
