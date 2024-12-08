const EngPg = () => {
    // Sample data for events and counselors
    const events = [
      {
        id: 1,
        title: "Career Development Workshop",
        date: "2024-12-15",
        description: "Join us for an exciting hands-on workshop on the latest advancements in tech, where you’ll get the chance to work with experts and innovate in real-time."
      },
      {
        id: 2,
        title: "Hackathon",
        date: "2024-12-20",
        description: "Participate in our 24-hour hackathon, where teams compete to develop the most innovative solutions to tech challenges."
      },
      {
        id: 3,
        title: "Career Development Seminar",
        date: "2024-12-25",
        description: "A seminar focused on career development, including tips for building your resume, networking strategies, and finding the right job in tech."
      },
    ];
  
    const counselors = [
      { id: 1, name: "Dr. John Doe", description: "Expert in Computer Science", photo: "public/image11.jpg" },
      { id: 2, name: "Prof. Jane", description: "Specialist in Engineering Careers", photo: "public/image12.jpg" },
    ];
  
    return (
      <div style={{ padding: "30px", backgroundColor: "#f4f7fc", minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center", color: "#333", fontSize: "2.5em", fontWeight: "bold" }}>Engineering Page</h1>
  
        {/* Events Section */}
        <div style={{ marginBottom: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ color: "#007bff", fontSize: "1.8em", fontWeight: "bold" }}>Upcoming Events</h2>
          <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "20px" }}>
            {events.map((event) => (
              <li key={event.id} style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#fafafa", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.5em", color: "#333", fontWeight: "600" }}>{event.title}</h3>
                <p style={{ fontSize: "1.1em", color: "#666" }}><strong>Date:</strong> {event.date}</p>
                <p style={{ fontSize: "1.1em", color: "#555" }}>{event.description}</p>
                <a
                  href={`/eventDet/${event.id}`}
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1.1em",
                    marginTop: "10px",
                    display: "inline-block",
                  }}
                >
                  View Details
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Counsellors Section */}
        <div style={{ marginBottom: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ color: "#007bff", fontSize: "1.8em", fontWeight: "bold" }}>Meet Our Counselors</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
            {counselors.map((counselor) => (
              <div
                key={counselor.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "8px",
                  width: "200px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <img
                  src={counselor.photo}
                  alt={counselor.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <h4 style={{ color: "#333", fontSize: "1.2em", fontWeight: "bold" }}>{counselor.name}</h4>
                <p style={{ color: "#777", fontSize: "1em" }}>{counselor.description}</p>
                <a href={`/counselors/${counselor.id}`} style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
                  More Info
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EngPg;
  