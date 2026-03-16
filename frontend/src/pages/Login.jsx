import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.access_token);
      navigate("/dash"); // ← automatic redirect
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Login failed");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },

  input: {
    margin: "12px 0",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "300px"
  },

  button: {
    marginTop: "12px",
    padding: "12px 24px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#1f2937",
    color: "white",
    cursor: "pointer"
  }
};

export default Login;
