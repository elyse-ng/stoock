function StockCard({ ticker, shares, sentiment }) {

  function sentimentColor(value) {
    if (value > 0) return "green";
    if (value < 0) return "red";
    return "gray";
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.ticker}>{ticker}</h3>

      <p>
        <strong>Shares:</strong> {shares}
      </p>

      <p>
        <strong>Sentiment:</strong>{" "}
        <span style={{ color: sentimentColor(sentiment) }}>
          {sentiment}
        </span>
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "220px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  },

  ticker: {
    marginBottom: "10px"
  }
};

export default StockCard;