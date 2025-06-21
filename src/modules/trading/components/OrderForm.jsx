// File: src/components/OrderForm.jsx
import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [orderType, setOrderType] = useState('Buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ orderType, price: parseFloat(price), amount: parseFloat(amount) });
    setPrice('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={() => setOrderType('Buy')}
          className={`px-4 py-2 rounded-lg font-bold ${orderType === 'Buy' ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'}`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => setOrderType('Sell')}
          className={`px-4 py-2 rounded-lg font-bold ${orderType === 'Sell' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
        >
          Sell
        </button>
      </div>
      <input
        type="number"
        placeholder="Price (USD)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="w-full p-2 rounded-lg border border-gray-300"
      />
      <input
        type="number"
        placeholder="Amount (RAK)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full p-2 rounded-lg border border-gray-300"
      />
      <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-lg font-bold">Submit Order</button>
    </form>
  );
};

export default OrderForm;


