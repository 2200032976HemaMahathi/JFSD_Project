
function About() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
      {/* Section 1 - Two images side by side */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: 'white' }}>
        <div style={{ margin: '10px' }}>
          <img 
            src="public\image2.jpg" 
            alt="About Us 1" 
            style={{ width: '45%', height: 'auto', borderRadius: '8px' }} 
          />
        
        </div>
      </section>

      {/* Section 2 - Company Info */}
      <section style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ color: 'darkblue', fontWeight: 'bold' }}>Our Objective</h2>
        <p style={{ color: 'black', fontSize: '18px' }}>
          We aim to provide expert career guidance and mentorship.
        </p>

        <h2 style={{ color: 'darkblue', fontWeight: 'bold' }}>Mission</h2>
        <p style={{ color: 'black', fontSize: '18px' }}>
          Our mission is to empower individuals to excel in their careers.
        </p>

        <h2 style={{ color: 'darkblue', fontWeight: 'bold' }}>About Our Company</h2>
        <p style={{ color: 'black', fontSize: '18px' }}>
          We are a leading career counseling platform, helping individuals make informed career choices.
        </p>

        <h2 style={{ color: 'darkblue', fontWeight: 'bold' }}>Achievements</h2>
        <ul style={{ color: 'black', fontSize: '18px' }}>
          <li>Guided over 100,000 students to success.</li>
          <li>Partnerships with top universities and organizations.</li>
          <li>Successful workshops and events globally.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
