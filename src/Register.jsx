// Register.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  const topics = [
    'Time Management',
    'Career Paths',
    'Opportunities',
    'Goals',
    'Communication Development',
    'Mental Health',
  ];

  const handleTopicChange = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime && selectedTopics.length > 0) {
      navigate('/payment');
    } else {
      alert('Please fill in all the details before proceeding.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register for a Session</h1>
      
      {/* Select Date */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Select Time */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Select Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Select Topics */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Topics to Discuss:</label>
        {topics.map((topic) => (
          <div key={topic} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              id={topic}
              value={topic}
              checked={selectedTopics.includes(topic)}
              onChange={() => handleTopicChange(topic)}
            />
            <label htmlFor={topic} style={{ marginLeft: '10px' }}>
              {topic}
            </label>
          </div>
        ))}
      </div>

      {/* Book Session Button */}
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          fontWeight: 'bold',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'block',
          margin: '20px auto',
        }}
      >
        Book My Session
      </button>
    </div>
  );
}

export default Register;
