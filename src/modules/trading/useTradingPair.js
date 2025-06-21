// File: src/components/useTradingPair.js
import { useState, useEffect } from 'react';

export default function useTradingPair(initialPair = 'RAK/XDC') {
  const [tradingPair, setTradingPair] = useState(initialPair);
  const [orderBook, setOrderBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceHistory, setPriceHistory] = useState([]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchOrderBook = async () => {
      setLoading(true);
      try {
        const dummyOrders = [
          { orderType: 'Buy', price: 50, amount: 100 },
          { orderType: 'Sell', price: 55, amount: 80 },
        ];
        setOrderBook(dummyOrders);
      } catch (err) {
        console.error('Error fetching order book:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderBook();
  }, [tradingPair]);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockPrice = (1850 + Math.random() * 50).toFixed(2);
      setPrice(mockPrice);
      setPriceHistory((prev) => [...prev.slice(-19), parseFloat(mockPrice)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { tradingPair, setTradingPair, orderBook, loading, price, priceHistory };
}
