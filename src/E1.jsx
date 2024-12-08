import { Link } from 'react-router-dom';

function E1() {
    const eventDetailStyle = {
        padding: '20px',
        lineHeight: '1.5',
        color: '#333',
    };

    const registerBoxStyle = {
        backgroundColor: 'yellow',
        color: 'black',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius: '5px',
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1>Event 1: Resume Building Workshop</h1>
            <div style={eventDetailStyle}>
                <p>Welcome to our Resume Building Workshop!</p>
                <p>
                    This workshop is designed to help participants craft professional and impactful resumes. 
                    Learn the techniques to showcase your skills effectively and stand out in job applications.
                </p>
                <p><strong>Date:</strong> January 10, 2024</p>
                <p><strong>Time:</strong> 10:00 AM - 1:00 PM</p>
                <p><strong>Location:</strong> Training Room A, Career Center</p>
            </div>

            {/* Register Button Box */}
            <Link to="/registerEvent1" style={{ textDecoration: 'none' }}>
                <div style={registerBoxStyle}>
                    Register
                </div>
            </Link>
        </div>
    );
}

export default E1;
