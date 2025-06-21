import { useEffect, useState } from 'react';

export default function useGoldPrice(pollInterval = 30000) {
  const [goldPrice, setGoldPrice] = useState(null);
  const [error, setError] = useState(null); // Optional: Track errors
  const [loading, setLoading] = useState(true); // Optional: Track initial load

  useEffect(() => {
    let isMounted = true;

    const fetchGoldPrice = async () => {
      try {
        const response = await fetch('https://api.raasystem.net/gold-price');
        const data = await response.json();

        if (!response.ok || !data?.price) {
          throw new Error(data?.message || 'Invalid gold price response');
        }

        if (isMounted) {
          setGoldPrice(data.price);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to fetch gold price:', err);
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollInterval]);

  return { goldPrice, loading, error };
}
