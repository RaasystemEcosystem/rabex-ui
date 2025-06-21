// src/hooks/useGoldPrice.ts
import { useEffect, useState } from 'react';

interface GoldPriceResponse {
  price: number;
}

export default function useGoldPrice(pollInterval = 30000) {
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGoldPrice() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://api.raasystem.net/gold-price');
        const data: GoldPriceResponse = await response.json();

        if (!response.ok || !data.price) {
          throw new Error('Invalid gold price data');
        }

        if (isMounted) {
          setGoldPrice(data.price);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch gold price');
          setLoading(false);
        }
      }
    }

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollInterval]);

  return { goldPrice, loading, error, refresh: () => fetchGoldPrice() };
}
