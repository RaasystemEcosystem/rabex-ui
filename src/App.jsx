// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RaaspayPage from "@/pages/Raaspay";
import { WalletProvider } from "@/context/WalletProvider";

export default function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-black text-white font-sans">

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<RaaspayPage />} /> {/* default landing */}
              <Route path="/raaspay" element={<RaaspayPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-400 border-t border-gray-800 py-4">
            © 2025 Raasystem — All rights reserved.
          </footer>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
}
