import { useEffect, useState } from "react";
import API from "../api";
import StockCard from "../components/stockcard";

function Dashboard() {

  const [stocks, setStocks] = useState([]);
  const [ticker, setTicker] = useState("");
  const [shares, setShares] = useState("");

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function loadPortfolio() {

    const token = localStorage.getItem("token");

    const response = await API.get("/portfolio", {
      headers: { Authorization: `Bearer ${token}` }
    });

    setStocks(response.data);
  }

  async function addStock() {

    const token = localStorage.getItem("token");

    await API.post(
      "/portfolio/add",
      { ticker, shares },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    // reload portfolio after adding
    loadPortfolio();

    setTicker("");
    setShares("");
  }

  return (
    <div style={{ padding: "40px" }}>

      <h2>Your Portfolio</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Ticker (e.g. AAPL)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />

        <input
          placeholder="Shares"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />

        <button onClick={addStock}>Add Stock</button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {stocks.map((stock, i) => (
          <StockCard
            key={i}
            ticker={stock.ticker}
            shares={stock.shares}
            sentiment={stock.sentiment}
          />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;
