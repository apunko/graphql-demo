import React from 'react';
import PropTypes from 'prop-types';

const TodoListPreview = ({ id, title }) => (
  <div>
    <h2>{title}-{id}</h2>
  </div>
);

TodoListPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoListPreview;
