import { Link } from "react-router-dom";

function Index() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stooko</h1>

      <p style={styles.subtitle}>
        Analyze market sentiment and track portfolio insights using news data and machine learning.
      </p>

      <div style={styles.buttons}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>

        <Link to="/dash">
          <button style={styles.buttonSecondary}>Dashboard</button>
        </Link>
      </div>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>Market Sentiment</h3>
          <p>Analyze news articles and measure public sentiment around stocks.</p>
        </div>

        <div style={styles.card}>
          <h3>Portfolio Insights</h3>
          <p>Track holdings and visualize performance in a simple dashboard.</p>
        </div>

        <div style={styles.card}>
          <h3>News Integration</h3>
          <p>Pull live financial news and extract sentiment signals.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px",
    fontFamily: "Arial"
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px"
  },

  button: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer"
  },

  buttonSecondary: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "1px solid #2563eb",
    backgroundColor: "white",
    color: "#2563eb",
    borderRadius: "6px",
    cursor: "pointer"
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px"
  },

  card: {
    width: "220px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fafafa"
  }
};

export default Index;