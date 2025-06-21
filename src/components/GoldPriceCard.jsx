// src/components/GoldPriceCard.tsx
import React from 'react';

interface GoldPriceCardProps {
  goldPrice: number | null;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

export default function GoldPriceCard({ goldPrice, loading, error, onRefresh }: GoldPriceCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 max-w-sm w-full text-yellow-400 font-mono">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
        Current Gold Price
        <button
          onClick={onRefresh}
          disabled={loading}
          className="text-sm px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50"
        >
          Refresh
        </button>
      </h2>

      {loading ? (
        <p className="text-gray-500 italic">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : goldPrice !== null ? (
        <p className="text-3xl">${goldPrice.toFixed(2)}</p>
      ) : (
        <p className="text-gray-500 italic">No data</p>
      )}
    </div>
  );
}
