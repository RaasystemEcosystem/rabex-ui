// src/components/Card.jsx

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * A reusable card component with consistent Tailwind styling.
 */
export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={clsx(
        "bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6",
        className
      )}
    >
      {title && (
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * CardContent: Optional internal wrapper with consistent padding.
 */
export function CardContent({ children, className = "" }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
