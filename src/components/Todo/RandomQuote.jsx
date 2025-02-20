import { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const API_URL = "https://api.quotable.io/random";
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote. Please try again.");
    }
  };

  return (
    <div className="p-5 text-center">
      <h2 className="text-lg font-bold">Random Quote</h2>
      <p className="italic">"{quote}"</p>
      <button
        onClick={fetchQuote}
        className="mt-2 bg-green-500 text-white p-2 rounded"
      >
        Get New Quote
      </button>
    </div>
  );
}
