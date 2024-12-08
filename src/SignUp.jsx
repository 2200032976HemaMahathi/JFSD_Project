import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    qualification: "",
    purpose: "",
    password: "",
    retypePassword: "",
  });

  // State for error messages and success messages
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccessMessage("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      // Send signup data to the backend
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle backend response
      if (response.data === "User registered successfully") {
        setSuccessMessage("User registered successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
      } else {
        setError(response.data); // Show error message from the backend
      }
    } catch (err) {
      console.error(err);
      setError(
        "Error signing up: " + (err.response ? err.response.data : err.message)
      );
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
    dropdown: {
      padding: "12px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    radioContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    radioLabel: {
      fontSize: "12px",
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
    heading: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginBottom: "10px",
      textAlign: "center",
    },
    success: {
      color: "green",
      fontSize: "12px",
      marginBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <div style={styles.error}>{error}</div>}
        {successMessage && <div style={styles.success}>{successMessage}</div>}
        <input
          style={styles.input}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          style={styles.dropdown}
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        >
          <option value="">Select Qualification</option>
          <option value="10th standard">10th standard</option>
          <option value="high school">High School</option>
          <option value="intermediate">Intermediate</option>
          <option value="vocational/diploma">Vocational/Diploma</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
        </select>
        <div>
          <div style={styles.heading}>Purpose</div>
          <div style={styles.radioContainer}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="purpose"
                value="Career guidance"
                checked={formData.purpose === "Career guidance"}
                onChange={handleChange}
              />
              Career guidance
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="purpose"
                value="Higher Education"
                checked={formData.purpose === "Higher Education"}
                onChange={handleChange}
              />
              Higher Education
            </label>
          </div>
        </div>
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="password"
          name="retypePassword"
          placeholder="Retype Password"
          value={formData.retypePassword}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Signup;
