import React, { useEffect, useState } from 'react';

interface Order {
  type: string;
  price: number;
  quantity: number;
}

interface AiData {
  predicted_price: number;
  spread: number;
  volatility: number;
  order_book: {
    bid: Order;
    ask: Order;
  };
}

export default function AiEngineDashboard() {
  const [data, setData] = useState<AiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAiData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:3000/api/run-ai-engine', { cache: 'no-store' });
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiData();
    const interval = setInterval(fetchAiData, 5000); // auto-refresh every 5 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white rounded-2xl p-6 shadow-xl border border-yellow-500">
      <h2 className="text-xl font-semibold text-yellow-400 mb-4">AI Engine Dashboard</h2>

      {loading && <p className="text-yellow-300">Loading AI engine data...</p>}
      {error && <p className="text-red-500 font-medium">⚠️ {error}</p>}

      {data && (
        <div className="text-yellow-200 text-sm space-y-2">
          <p><strong className="text-yellow-400">Predicted Price:</strong> {data.predicted_price}</p>
          <p><strong className="text-yellow-400">Spread:</strong> {data.spread}</p>
          <p><strong className="text-yellow-400">Volatility:</strong> {data.volatility}</p>
          <div className="pt-2 border-t border-yellow-700 mt-3">
            <h3 className="text-yellow-300 font-semibold">Order Book</h3>
            <p><strong>Bid:</strong> {data.order_book.bid.type} at {data.order_book.bid.price} (Qty: {data.order_book.bid.quantity})</p>
            <p><strong>Ask:</strong> {data.order_book.ask.type} at {data.order_book.ask.price} (Qty: {data.order_book.ask.quantity})</p>
          </div>
        </div>
      )}
    </div>
  );
}
