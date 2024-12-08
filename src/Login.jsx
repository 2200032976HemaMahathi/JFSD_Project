import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Clear any previous error
      setError("");

      // Send login request to the backend
      const response = await axios.post(
        "http://localhost:8080/api/login",
        { username, password }, // Sending username and password in the body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful login
      if (response.data == "Login successful!") {
        alert(response.data); // Display the success message
        navigate("/student-dashboard"); // Navigate to the StudentDashboard
      } else {
        setError(response.data); // Display backend error message
      }
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
    }
  };

  // Component styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: 'url("/background.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      width: "300px",
      gap: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "12px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      padding: "10px",
      backgroundColor: "yellow",
      color: "black",
      border: "none",
      borderRadius: "4px",
      fontWeight: "bold",
      cursor: "pointer",
      alignSelf: "center",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;