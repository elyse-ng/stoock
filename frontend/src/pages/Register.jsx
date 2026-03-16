import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister() {
    try {

      await API.post("/auth/register", {
        email,
        password
      });

      alert("Account created successfully");

      // redirect to login
      navigate("/login");

    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleRegister}>
        Register
      </button>
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

export default Register;

