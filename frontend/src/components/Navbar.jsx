import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>Stooko</Link>
      </div>


      <div style={styles.links}>
        <Link to="/Trending" style={styles.link}>Trending</Link>
        <Link to="/Dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/Login" style={styles.link}>Login</Link>
        <Link to="/Register" style={styles.link}>Register</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#1f2937",
    color: "white"
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  }
};

export default Navbar;