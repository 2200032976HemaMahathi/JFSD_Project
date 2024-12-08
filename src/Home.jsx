/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Styles for the first section
  const sectionStyle = {
    width: "100%",
    height: "1.5in",
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "flex-start",
    padding: "0 20px",
    justifyContent: "space-between",
  };

  const titleStyle = {
    color: "darkblue",
    margin: "0",
    fontFamily: "'Gorditas', cursive",
    lineHeight: "1.2",
    paddingTop: "10px",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  const loginStyle = {
    display: "inline-block",
    backgroundColor: "white",
    color: "blue",
    padding: "5px 10px",
    border: "1px solid blue",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
  };

  const signUpStyle = {
    display: "inline-block",
    backgroundColor: "lightblue",
    color: "white",
    padding: "5px 10px",
    border: "1px solid darkblue",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
  };

  // Hover effect state and handlers for Login and Get Started buttons
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);

  const loginHoverStyle = {
    backgroundColor: "blue",
    color: "white",
  };

  const handleLoginMouseEnter = () => setIsLoginHovered(true);
  const handleLoginMouseLeave = () => setIsLoginHovered(false);

  const buttonStyle = {
    backgroundColor: "lightblue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const getStartedHoverStyle = {
    backgroundColor: "blue",
    color: "white",
  };

  const handleGetStartedMouseEnter = () => setIsGetStartedHovered(true);
  const handleGetStartedMouseLeave = () => setIsGetStartedHovered(false);

  // Styles for the second section
  const secondSectionStyle = {
    width: "100%",
    height: "3in",
    marginTop: "0.5in",
    display: "flex",
    paddingLeft: "1in",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const subSectionStyle = {
    width: "5in",
    height: "3in",
    border: "none",
    padding: "10px",
    boxSizing: "border-box",
  };

  // Image to be added in the second section
  const imageStyle = {
    width: "75%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  // Styles for the third section
  const thirdSectionStyle = {
    width: "100%",
    height: "5in",
    marginTop: "0.3in",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "flex-end",
  };
  const innerSectionStyle = {
    height: "4in",
    width: "10in",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    padding: "0.5in 0.2in 0.2in 0.5in",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "0.5in",
    marginRight: "0.2in",
  };

  const successStoryStyle = {
    color: "black",
    margin: "10px 0",
  };

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const successStories = [
    "Customer A: “This service changed my life! I found my dream job.The guidance I received was invaluable. I had no idea how to approach my career growth and was feeling lost. But with the mentorship and tailored advice, I now have a clear direction. The tools and insights provided gave me the confidence to take bold steps toward my goals. I’m so grateful!”",
    "Customer B: “The guidance I received was invaluable. Thank you!The guidance I received was invaluable. I had no idea how to approach my career growth and was feeling lost. But with the mentorship and tailored advice, I now have a clear direction. The tools and insights provided gave me the confidence to take bold steps toward my goals. I’m so grateful!”",
    "Customer C: “I can’t believe how easy it was to navigate my career path.The guidance I received was invaluable. I had no idea how to approach my career growth and was feeling lost. But with the mentorship and tailored advice, I now have a clear direction. The tools and insights provided gave me the confidence to take bold steps toward my goals. I’m so grateful!”",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fifth and Sixth Sections
  const sectionStyleBase = {
    width: "100%",
    height: "5in",
    marginTop: "0.4in",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0.2in",
  };

  const subSectionSmall = {
    height: "4in",
    width: "2in",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    marginBottom: "0.2in",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid lightgray",
  };

  return (
    <div>
      {/* First Section */}
      <div style={sectionStyle}>
        <h1 style={titleStyle}>CarEdu</h1>

        {/* Navigation Links */}
        <div style={navStyle}>
          <Link to="/contact" style={{ color: "darkblue", textDecoration: "none" }}>
            Contact Us
          </Link>
          <Link to="/about" style={{ color: "darkblue", textDecoration: "none" }}>
            About Us
          </Link>
          <button
            style={{
              ...loginStyle,
              ...(isLoginHovered ? loginHoverStyle : {}),
            }}
            onMouseEnter={handleLoginMouseEnter}
            onMouseLeave={handleLoginMouseLeave}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button style={signUpStyle} onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div style={secondSectionStyle}>
        <div style={subSectionStyle}>
          <h2 style={{ fontWeight: 'bold', margin: '0' }}>Discover Your Perfect Career</h2>
          <p style={{ color: 'black' }}>
            Get expert career guidance, counselling and mentorship to find out which future path you will enjoy and excel at.
          </p>
          <button
            style={{
              ...buttonStyle,
              ...(isGetStartedHovered ? getStartedHoverStyle : {}),
            }}
            onMouseEnter={handleGetStartedMouseEnter}
            onMouseLeave={handleGetStartedMouseLeave}
            onClick={() => navigate("/signup")}
          >
            GET STARTED
          </button>
        </div>

        {/* Image in the Second Section */}
        <div>
          <img
            src="public/image3.jpg"
           
            style={imageStyle}
          />
        </div>
      </div>

      {/* Third Section */}
      <div style={thirdSectionStyle}>
        <div style={innerSectionStyle}>
          <h3 style={successStoryStyle}>Success Stories</h3>
          <p style={successStoryStyle}>{successStories[currentStoryIndex]}</p>
        </div>
      </div>

      {/* Fifth and Sixth Sections */}
      <div style={sectionStyleBase}>
        <div style={subSectionSmall}>
          <h3>For Students</h3>
          <p>Get personalized guidance and insights for your career path!</p>
        </div>
        <div style={subSectionSmall}>
          <h3>For Employers</h3>
          <p>Find the perfect talent with our career advice service.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
