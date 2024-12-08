/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

function ProfilePage() {
  // Sample data for the profile page
  const user = {
    name: 'Pranavi',
    education: 'B.Tech in Computer Science, XYZ University',
    registeredEvents: [
      { title: 'Career Development Workshop', date: 'January 15, 2024', link: '/E1', id: 1 },
      { title: 'Tech Innovation Conference', date: 'February 10, 2024', link: '/E2', id: 2 }
    ],
    attendedEvents: [
      { title: 'Artificial Intelligence Seminar', date: 'November 12, 2023', id: 3 },
      { title: 'Machine Learning Bootcamp', date: 'December 5, 2023', id: 4 }
    ],
    counselor: {
      name: 'Dr. Jane Smith',
      specialty: 'Career Counseling',
      description: 'Experienced in guiding students through career transitions and professional growth.',
      link: '/JaneSmith'
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: 'auto', backgroundColor: '#f4f7fc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* Profile Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#333' }}>{user.name}'s Profile</h1>
        <Link to="/profile">
          <img
            src="public/image13.jpg"  // Replace with dynamic or actual image path
            alt="Profile"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid #ddd',
              cursor: 'pointer'
            }}
          />
        </Link>
      </div>
      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />
      
      {/* Educational Qualifications */}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <h2 style={{ color: '#444' }}>Educational Qualifications</h2>
        <p>{user.education}</p>
      </section>

      {/* Registered Events */}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <h2 style={{ color: '#444' }}>Registered Events</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {user.registeredEvents.map((event, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <Link
                to={event.link}
                style={{
                  color: '#007BFF',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{event.title}</span>
                <span style={{ fontSize: '0.9em', color: '#888' }}>{event.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Attended Events */}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <h2 style={{ color: '#444' }}>Attended Events</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {user.attendedEvents.map((event, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <Link
                to={`/eventDet/${event.id}`}
                style={{
                  color: '#007BFF',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{event.title}</span>
                <span style={{ fontSize: '0.9em', color: '#888' }}>{event.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Counselor Info */}
      <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <h2 style={{ color: '#444' }}>Counselor Info</h2>
        <p><strong>Name:</strong> {user.counselor.name}</p>
        <p><strong>Specialty:</strong> {user.counselor.specialty}</p>
        <p><strong>Description:</strong> {user.counselor.description}</p>
        <Link
          to={user.counselor.link}
          style={{
            color: '#007BFF',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            marginTop: '10px'
          }}
        >
          View Counselor Profile
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '10px', marginTop: '40px', borderTop: '1px solid #ddd', color: '#888' }}>
        <p>&copy; 2024 Career Counseling Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProfilePage;
