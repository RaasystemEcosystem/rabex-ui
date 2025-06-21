// src/components/AIPrediction.jsx
import React, { useEffect, useState } from 'react';

export default function AIPrediction() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrediction() {
      try {
        setLoading(true);
        setError(null);

        // Replace with your real AI prediction API endpoint
        const response = await fetch('https://api.raasystem.net/ai-prediction');

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Assuming API returns { asset, direction, confidence, priceTarget, timeframe }
        setPrediction(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch AI prediction');
      } finally {
        setLoading(false);
      }
    }

    fetchPrediction();

    // Optionally, refresh every X seconds
    const interval = setInterval(fetchPrediction, 60000); // every 60 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-gray-900 rounded-xl shadow-md text-yellow-400 text-center">
        Loading AI Prediction...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-900 rounded-xl shadow-md text-red-400 text-center">
        Error: {error}
      </div>
    );
  }

  if (!prediction) {
    return null;
  }

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-md text-yellow-400">
      <h2 className="text-xl font-semibold mb-2">AI Trading Prediction</h2>
      <p>
        Asset: <span className="font-mono">{prediction.asset}</span>
      </p>
      <p>
        Direction: <span className="font-bold">{prediction.direction}</span>
      </p>
      <p>
        Confidence: <span className="font-mono">{prediction.confidence}%</span>
      </p>
      <p>
        Price Target: <span className="font-mono">${prediction.priceTarget}</span>
      </p>
      <p>
        Timeframe: <span>{prediction.timeframe}</span>
      </p>
    </div>
  );
}
