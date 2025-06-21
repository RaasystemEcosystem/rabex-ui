// src/components/Badge.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/**
 * A simple badge/pill component for status or labels.
 */
export default function Badge({ children, color = 'yellow', className = '' }) {
  const colors = {
    yellow: 'bg-yellow-500 text-black',
    green: 'bg-green-500 text-white',
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    gray: 'bg-gray-500 text-white',
  };

  return (
    <span
      className={clsx(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
        colors[color] || colors.yellow,
        className
      )}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'green', 'red', 'blue', 'gray']),
  className: PropTypes.string,
};
