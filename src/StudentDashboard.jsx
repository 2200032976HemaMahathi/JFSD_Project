/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";

function StudentDashboard() {
  // Carousel images and links
  const eventItems = [
    { src: "public/image8.jpeg", alt: "Event 1", link: "/E1" },
    { src: "public/image9.jpeg", alt: "Event 2", link: "/E2" },
  ];

  const counselorItems = [
    { src: "public/image10.jpg", alt: "Counselor 1", link: "/JohnDoe" },
    { src: "public/image11.jpg", alt: "Counselor 2", link: "/JaneSmith" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        boxSizing: "border-box", // Ensures padding doesn't exceed 100vw
        overflowX: "hidden",
      }}
    >
      {/* First Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <h1>Hi, [Registered Name]</h1>
        <Link to="/profile">
          <img
            src="image13.jpg"
            alt="Profile"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
        </Link>
      </div>

      {/* Select Your Field Section */}
      <div style={{ padding: "20px" }}>
        <h2>Select Your Field</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "20px",
          }}
        >
          <Link
            to="/EngPg"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <img
              src="public/image5.jpeg"
              alt="Engineering"
              style={{
                width: "80px",
                height: "60px",
                marginRight: "15px",
                borderRadius: "8px",
              }}
            />
            <span style={{ fontSize: "1.2em", color: "#333" }}>Engineering</span>
          </Link>

          <Link
            to="/BusinessPg"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <img
              src="public/image6.jpeg"
              alt="Business"
              style={{
                width: "80px",
                height: "60px",
                marginRight: "15px",
                borderRadius: "8px",
              }}
            />
            <span style={{ fontSize: "1.2em", color: "#333" }}>Business</span>
          </Link>

          <Link
            to="/FashionPg"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <img
              src="public/image7.jpeg"
              alt="Fashion"
              style={{
                width: "60px",
                height: "60px",
                marginRight: "15px",
                borderRadius: "8px",
              }}
            />
            <span style={{ fontSize: "1.2em", color: "#333" }}>Fashion</span>
          </Link>
        </div>
      </div>

      {/* Career Assessment Test Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "yellow",
          textAlign: "center",
        }}
      >
        <h2>Career Assessment Test</h2>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
          }}
        >
          Take Test
        </button>
      </div>

      {/* Related Events/Webinars Section */}
      <div style={{ padding: "20px" }}>
        <h2>Related Events/Webinars</h2>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {eventItems.map((event, index) => (
            <Link to={event.link} key={index} style={{ textAlign: "center" }}>
              <img
                src={event.src}
                alt={event.alt}
                style={{
                  width: "150px",
                  height: "100px",
                  borderRadius: "8px",
                }}
              />
              <p>{event.alt}</p>
            </Link>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = "/events")}
          style={{
            marginTop: "10px",
          }}
        >
          See More
        </button>
      </div>

      {/* Recommended Counselors Section */}
      <div style={{ padding: "20px" }}>
        <h2>Recommended Counselors</h2>
        <div
          style={{
            display: "flex",
            gap: "35px",
            flexWrap: "wrap",
          }}
        >
          {counselorItems.map((counselor, index) => (
            <Link
              to={counselor.link}
              key={index}
              style={{ textAlign: "center" }}
            >
              <img
                src={counselor.src}
                alt={counselor.alt}
                style={{
                  width: "150px",
                  height: "120px",
                  borderRadius: "8px",
                }}
              />
              <p>{counselor.alt}</p>
            </Link>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = "/counsellors")}
          style={{
            marginTop: "10px",
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;
