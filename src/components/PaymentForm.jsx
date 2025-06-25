import React, { useState } from 'react';

export default function PaymentForm() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Replace with real contract or API call
    alert(`Sending ${amount} Raaskoin to ${recipient}`);
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-accent mb-4">Make a Payment</h2>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full"
          placeholder="Recipient (e.g. 0xABC123...)"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          className="w-full"
          placeholder="Amount (Raaskoin)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-accent text-black hover:bg-yellow-300 w-full" onClick={handleSend}>
          Pay Now
        </button>
      </div>
    </div>
  );
}


