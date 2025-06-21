import React from "react";
import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggle: () => void;
}

export default function DarkModeToggle({ darkMode, toggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400
        ${
          darkMode
            ? "bg-yellow-500 text-black hover:bg-yellow-400"
            : "bg-gray-900 text-yellow-300 hover:bg-gray-800"
        }`}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden sm:inline">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
