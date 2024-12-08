import { Link } from 'react-router-dom';

function RegisterEvent1() {
    const containerStyle = {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    };

    const detailStyle = {
        marginBottom: '10px',
        lineHeight: '1.5',
        color: '#555',
    };

    const buttonStyle = {
        backgroundColor: 'yellow',
        color: 'black',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '20px',
        display: 'block',
        width: '100%',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Register for the Event</h1>
            <div style={detailStyle}>
                <p><strong>Event Title:</strong> Resume Building Workshop</p>
                <p><strong>Date:</strong> January 10, 2024</p>
                <p>
                    <strong>Description:</strong> 
                    This workshop focuses on helping participants craft outstanding resumes. 
                    Gain insights into presenting your skills effectively to make a strong impression.
                </p>
            </div>

            {/* Register Button */}
            <Link to="/payment" style={buttonStyle}>
                Register
            </Link>
        </div>
    );
}

export default RegisterEvent1;
