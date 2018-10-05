import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => (
  <li>
    {title}
    <button type="button" className="remove">×</button>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
