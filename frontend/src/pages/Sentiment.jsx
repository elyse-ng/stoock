import { useState } from "react";
import API from "../api";

function Sentiment() {

  const [ticker, setTicker] = useState("");
  const [result, setResult] = useState(null);

  async function checkSentiment() {
    const response = await API.get(`/sentiment/${ticker}`);
    setResult(response.data);
  }

  return (
    <div>

      <h2>Stock Sentiment</h2>

      <input
        placeholder="Ticker"
        onChange={(e) => setTicker(e.target.value)}
      />

      <button onClick={checkSentiment}>
        Check Sentiment
      </button>

      {result && (
        <div>
          <h3>{result.ticker}</h3>
          <p>{result.sentiment}</p>
        </div>
      )}

    </div>
  );
}

export default Sentiment;