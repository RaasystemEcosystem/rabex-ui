// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/raaspay', label: 'Raaspay' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/docs', label: 'Docs' },
];

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 p-4 flex space-x-6 max-w-7xl mx-auto">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            text-white hover:text-yellow-400 font-medium ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''}
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}


