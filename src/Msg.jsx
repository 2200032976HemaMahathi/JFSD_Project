
function ThankYouMessage() {
  return (
    <div
      style={{
        display: 'window',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f4f6f9',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <h1
          style={{
            color: '#4CAF50',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Thank You!
        </h1>
        <p
          style={{
            color: '#555',
            fontSize: '18px',
            marginBottom: '20px',
            lineHeight: '1.5',
          }}
        >
          We have received your query and will respond as soon as possible.
        </p>
        <p
          style={{
            color: '#777',
            fontSize: '16px',
            fontStyle: 'italic',
          }}
        >
          Your satisfaction is our priority.
        </p>
      </div>
    </div>
  );
}

export default ThankYouMessage;
