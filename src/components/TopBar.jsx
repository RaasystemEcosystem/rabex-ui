// File: src/components/TopBar.jsx

import React from 'react';

export default function TopBar({ theme, toggleTheme, goldPrice }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">RABEX Trading Dashboard</h1>
      <div className="flex items-center space-x-6">
        <div className="text-sm text-gray-300">
          Gold Price: {goldPrice ? `$${goldPrice.toFixed(2)}` : 'Loading...'}
        </div>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}
