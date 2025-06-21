// File: components/OrderBook.jsx
import React from "react";

const OrderBook = () => {
  const bids = [
    { price: 0.94, amount: 120 },
    { price: 0.93, amount: 100 },
    { price: 0.91, amount: 85 },
  ];

  const asks = [
    { price: 0.95, amount: 110 },
    { price: 0.97, amount: 90 },
    { price: 0.99, amount: 70 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-green-400 mb-2">Buy Orders (Bids)</h3>
        <ul className="space-y-1 text-sm">
          {bids.map((bid, index) => (
            <li key={index} className="flex justify-between">
              <span>${bid.price.toFixed(2)}</span>
              <span>{bid.amount} RSK</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-red-400 mb-2">Sell Orders (Asks)</h3>
        <ul className="space-y-1 text-sm">
          {asks.map((ask, index) => (
            <li key={index} className="flex justify-between">
              <span>${ask.price.toFixed(2)}</span>
              <span>{ask.amount} RSK</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderBook;
