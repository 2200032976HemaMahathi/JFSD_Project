import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/messages/add", {
        name,
        email,
        message,
      });
      setStatus(response.data);
      setName("");
      setEmail("");
      setMessage("");

      // Redirect to Msg page after successful message submission
      navigate("/msg"); // Navigate to Msg page
    } catch (error) {
      console.error("Error saving message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  const pageStyle = {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    color: "#0056b3",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "800px",
    backgroundColor: "white",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const textAreaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "none",
  };

  const buttonStyle = {
    backgroundColor: "#0056b3",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const infoStyle = {
    marginTop: "30px",
    lineHeight: "1.6",
  };

  const contactDetailsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    gap: "20px",
  };

  const detailBoxStyle = {
    flex: 1,
    padding: "15px",
    backgroundColor: "#eef3fc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "#0056b3",
    marginBottom: "10px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <div style={containerStyle}>
        <h2>We would love to hear from you!</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            style={textAreaStyle}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
        {status && <p>{status}</p>}
        <div style={infoStyle}>
          <h3>Alternatively, reach us at:</h3>
          <div style={contactDetailsStyle}>
            <div style={detailBoxStyle}>
              <span style={iconStyle}>📞</span>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div style={detailBoxStyle}>
              <span style={iconStyle}>📧</span>
              <p>Email: contact@caredu.com</p>
            </div>
            <div style={detailBoxStyle}>
              <span style={iconStyle}>📍</span>
              <p>Address: 123 Career Lane, Knowledge City, IN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
