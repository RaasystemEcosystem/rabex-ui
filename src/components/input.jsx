// app/components/ui/input.jsx

import React from 'react';

export function Input({ type = "text", className = '', ...props }) {
  return (
    <input
      type={type}
      className={`w-full px-3 py-2 border rounded-md text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
