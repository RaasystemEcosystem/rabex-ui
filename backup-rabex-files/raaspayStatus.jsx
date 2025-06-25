import React, { useEffect, useState } from "react";

const RaaspayStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/Raaspay-status");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStatus(data);
    };

    ws.onclose = () => console.log("WebSocket closed");

    return () => ws.close();
  }, []);

  if (!status) return <div>Loading Raaspay Status...</div>;

  return (
    <div>
      <h2>Raaspay Engine Live Status</h2>
      <p><strong>Predicted Price:</strong> {status.predicted_price}</p>
      <p><strong>Spread:</strong> {(status.spread * 100).toFixed(2)}%</p>
      <h3>Order Book</h3>
      <p>Bid: {status.order_book.bid.quantity} @ {status.order_book.bid.price}</p>
      <p>Ask: {status.order_book.ask.quantity} @ {status.order_book.ask.price}</p>
      <p><strong>Oracle Price:</strong> {status.oracle_price}</p>
      <h3>Rebalance Status</h3>
      <pre>{JSON.stringify(status.rebalance_status, null, 2)}</pre>
    </div>
  );
};

export default RaaspayStatus;



