import React from 'react';

const mockTransactions = [
  { to: '0xABC123', amount: 12.5, date: '2025-06-21' },
  { to: '0xDEF456', amount: 5, date: '2025-06-20' },
];

export default function TransactionsList() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-accent mb-4">📄 Recent Transactions</h2>

      <ul className="divide-y divide-gray-700">
        {mockTransactions.map((tx, index) => (
          <li key={index} className="py-3">
            <p><span className="text-gray-400">To:</span> {tx.to}</p>
            <p><span className="text-gray-400">Amount:</span> {tx.amount} Raaskoin</p>
            <p><span className="text-gray-400">Date:</span> {tx.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


