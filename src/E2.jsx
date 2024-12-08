import { Link } from 'react-router-dom';

function E2() {
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
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1>Event 2: Career Development Workshop</h1>
            <div style={eventDetailStyle}>
                <p>Welcome to our Career Development Workshop!</p>
                <p>
                    This event is tailored for students and professionals seeking guidance on advancing their careers in todays competitive world.
                    Join us for an engaging session with industry experts who will share their insights on skills development, networking, and career progression.
                </p>
                <p><strong>Date:</strong> January 15, 2024</p>
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Location:</strong> Main Auditorium, City Center</p>
            </div>

            {/* Register Button Box */}
            <Link to="/registerEvents" style={{ textDecoration: 'none' }}>
                <div style={registerBoxStyle}>
                    Register
                </div>
            </Link>
        </div>
    );
}

export default E2;
