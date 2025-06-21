import React from 'react';

const bids = [
  { price: '$0.93', amount: '100 RSK' },
  { price: '$0.91', amount: '85 RSK' },
];

const asks = [
  { price: '$0.95', amount: '120 RSK' },
  { price: '$0.97', amount: '90 RSK' },
];

export default function OrderBook() {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-gold text-2xl font-bold mb-4">Order Book (Demo)</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-gold-deep text-lg font-semibold mb-2">Bids</h3>
          <ul className="space-y-1">
            {bids.map((bid, i) => (
              <li key={i}>
                Buy {bid.amount} @ <span className="text-gold font-medium">{bid.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gold-deep text-lg font-semibold mb-2">Asks</h3>
          <ul className="space-y-1">
            {asks.map((ask, i) => (
              <li key={i}>
                Sell {ask.amount} @ <span className="text-gold font-medium">{ask.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
