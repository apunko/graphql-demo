import React from 'react';
import PropTypes from 'prop-types';
import './todo-list-preview.css';

const TodoListPreview = ({ id, handleClick, title }) => (
  <button type="button" className="todo-preview" onClick={() => handleClick(id)}>
    {title}
  </button>
);

TodoListPreview.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoListPreview;
