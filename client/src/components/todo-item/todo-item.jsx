import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
