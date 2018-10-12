import * as React from 'react';
import './todo-list-preview.css';

interface TodoListPreviewProps {
  id: number;
  title: string;
  handleClick(id: number): void;
}

const TodoListPreview = ({ id, handleClick, title }: TodoListPreviewProps) => {
  const onClick = () => handleClick(id);

  return (
    <button type='button' className='todo-preview' onClick={onClick}>
      {title}
    </button>
  );
};

export default TodoListPreview;
