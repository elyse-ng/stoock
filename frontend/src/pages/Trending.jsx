import { useEffect, useState } from "react";
import API from "../api";
import StockCard from "../components/stockcard";

function Trending() {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {

    async function loadTrending() {
      try {

        const response = await API.get("/stocks/trending");

        setStocks(response.data);

      } catch (error) {
        console.error("Failed to load trending stocks", error);
      }
    }

    loadTrending();

  }, []);

  return (
    <div style={styles.container}>
      <h2>Trending Stocks</h2>

      <div style={styles.grid}>
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

const styles = {
  container: {
    padding: "40px"
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px"
  }
};

export default Trending;
