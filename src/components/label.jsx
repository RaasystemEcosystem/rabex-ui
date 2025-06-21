// app/components/ui/label.jsx

import React from 'react';

export function Label({ htmlFor, className = '', children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${className}`}
    >
      {children}
    </label>
  );
}
