import { useParams } from 'react-router-dom';

function EventDet() {
  const { eventId } = useParams();

  // Sample event details (this could be fetched dynamically in a real app)
  const eventDetails = {
    1: {
      title: 'Career Development Workshop',
      date: 'January 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium, City Center',
      description: 'A workshop designed to help students and professionals advance their careers in a competitive job market. Learn from industry experts about skills development, career progression, and networking.',
    },
    2: {
      title: 'Tech Innovation Conference',
      date: 'February 10, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Park, Downtown',
      description: 'An exciting conference bringing together tech innovators, entrepreneurs, and experts to discuss the latest trends and technologies shaping the future.',
    },
    3: {
      title: 'Artificial Intelligence Seminar',
      date: 'November 12, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'University Auditorium',
      description: 'A seminar focused on the latest advancements in AI. Experts will explore machine learning, neural networks, and AI in business and healthcare.',
    },
    4: {
      title: 'Enterpreneurship Boot camp',
      date: 'December 5, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Tech Hub, Silicon Valley',
      description: 'A hands-on bootcamp where participants will learn the fundamentals of Business and Enterpreneurship.',
    },
  };

  // Get event details based on eventId
  const event = eventDetails[eventId];

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: 'auto', backgroundColor: '#f4f7fc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* Event Title */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '2.5em', fontWeight: 'bold' }}>{event?.title}</h1>
      </div>

      {/* Event Date, Time, and Location */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#444', fontSize: '1.5em' }}>Event Details</h2>
        <p style={{ fontSize: '1.2em', color: '#333' }}><strong>Date:</strong> {event?.date}</p>
        <p style={{ fontSize: '1.2em', color: '#333' }}><strong>Time:</strong> {event?.time}</p>
        <p style={{ fontSize: '1.2em', color: '#333' }}><strong>Location:</strong> {event?.location}</p>
      </div>

      {/* Event Description */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#444', fontSize: '1.5em' }}>Event Description</h2>
        <p style={{ fontSize: '1.2em', color: '#333' }}>{event?.description}</p>
      </div>

      {/* Button to Navigate Back */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => (window.location.href = '/events')}
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '12px 30px',
            fontSize: '1.1em',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
        >
          Back to Events
        </button>
      </div>
    </div>
  );
}

export default EventDet;
