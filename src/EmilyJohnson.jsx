import { Link } from 'react-router-dom';

function JaneSmith() {
  // Sample data for Jane Smith
  const janeSmithData = {
    name: "Ms. Emily Johnson",
    education: "MBA in Business Administration, Harvard University",
    achievements: [
      "Expert in strategic business planning",
      "25+ years of career counseling experience",
      "Guided 700+ professionals to excel in business and management",
    ],
    feedbackRating: 4.9, // Out of 5
    description:
      "Ms. Jane Smith is a highly experienced career counselor specializing in business and management. Her strategic insights and personalized guidance have empowered professionals to achieve unparalleled success in their careers.",
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
      <h1 style={{ textAlign: 'center' }}>{janeSmithData.name}</h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>{janeSmithData.education}</p>

      <div style={{ margin: '20px 0' }}>
        <h3>Achievements</h3>
        <ul>
          {janeSmithData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Feedback Rating</h3>
        <div>{renderStars(janeSmithData.feedbackRating)}</div>
        <p>{janeSmithData.feedbackRating} / 5</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Description</h3>
        <p>{janeSmithData.description}</p>
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

export default JaneSmith;
