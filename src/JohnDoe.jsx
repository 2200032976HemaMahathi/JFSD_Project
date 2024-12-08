import { Link } from 'react-router-dom';

function JohnDoe() {
  // Sample data for John Doe
  const johnDoeData = {
    name: "Dr. John Doe",
    education: "Ph.D. in Engineering, Stanford University",
    achievements: [
      "Author of 'Engineering the Future'",
      "10+ years of career counseling experience",
      "Mentored over 500 students in top engineering programs",
    ],
    feedbackRating: 4.8, // Out of 5
    description:
      "Dr. John Doe is a renowned career counselor specializing in engineering fields. His practical advice and hands-on approach have helped students achieve their dreams in competitive engineering programs worldwide.",
  };

  // Function to render feedback stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i < Math.floor(rating) ? "#FFD700" : "#ccc", // Yellow for filled stars, gray for empty stars
            fontSize: "20px",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>{johnDoeData.name}</h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>{johnDoeData.education}</p>

      <div style={{ margin: '20px 0' }}>
        <h3>Achievements</h3>
        <ul>
          {johnDoeData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Feedback Rating</h3>
        <div>{renderStars(johnDoeData.feedbackRating)}</div>
        <p>{johnDoeData.feedbackRating} / 5</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Description</h3>
        <p>{johnDoeData.description}</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to="/register">
          <button
            style={{
              backgroundColor: '#FFD700',
              color: '#000',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Book a Session
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JohnDoe;
