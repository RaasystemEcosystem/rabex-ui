// app/components/textarea.jsx

import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

/**
 * A reusable textarea component with full dark mode and accessibility support.
 */
export function Textarea({ className = '', label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          "w-full px-3 py-2 border rounded-md text-sm transition",
          "bg-white dark:bg-gray-800",
          "border-gray-300 dark:border-gray-700",
          "text-gray-900 dark:text-white",
          "placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-yellow-400",
          className
        )}
        aria-label={label || "textarea"}
        {...props}
      />
    </div>
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

