import React from 'react';
import Raaspay from '../../components/Raaspay';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function RaaspayPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar />
        <main className="flex-1 p-4">
          <Raaspay />
        </main>
      </div>
    </div>
  );
}

