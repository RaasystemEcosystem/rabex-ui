import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * Tabs component that accepts a list of tab labels and renders children for the active tab.
 */
export default function Tabs({ tabs, children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div className="flex border-b border-gray-700 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveIndex(idx)}
            className={clsx(
              "py-2 px-4 font-medium text-sm transition",
              activeIndex === idx
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-yellow-300"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-800 rounded-xl shadow">
        {Array.isArray(children) ? children[activeIndex] : children}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
};
