// File: src/components/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Wallet,
  Activity,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
  { name: 'Order Book', path: '/order-book', icon: <BookOpen size={18} /> },
  { name: 'Active Trades', path: '/trades', icon: <Activity size={18} /> },
  { name: 'Market Data', path: '/market', icon: <BarChart2 size={18} /> },
  { name: 'Wallet', path: '/wallet', icon: <Wallet size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-white min-h-screen p-6 shadow-md">
      <h2 className="text-2xl font-bold text-yellow-400 mb-8">📊 RABEX</h2>
      <ul className="space-y-4">
        {menuItems.map(({ name, path, icon }) => (
          <li key={name}>
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${isActive
                  ? 'bg-yellow-500 text-black font-bold'
                  : 'hover:bg-gray-800 text-gray-300'}`
              }
            >
              {icon}
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
