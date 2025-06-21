// File: components/SettingsPanel.jsx
import React from "react";

const SettingsPanel = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold mb-2">Settings</h2>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Theme Mode</span>
        <button
          onClick={toggleTheme}
          className="px-4 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Coming soon: Wallet preferences, Network switching, Language support.
      </p>
    </div>
  );
};

export default SettingsPanel;
