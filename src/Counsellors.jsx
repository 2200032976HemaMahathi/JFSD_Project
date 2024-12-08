import { Link } from 'react-router-dom';

const counselorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    field: "Engineering",
    photo: "public/image11.jpg", // Image 10 for Dr. John Doe
    description: "Experienced career counselor in Engineering fields.",
    page: "/JohnDoe", // Navigation target for John Doe
  },
  {
    id: 2,
    name: "Ms. Jane Smith",
    field: "Engineering",
    photo: "public/image10.jpg", // Image 11 for Ms. Jane Smith
    description: "Expert in Business and Management counseling.",
    page: "/JaneSmith", // Navigation target for Jane Smith
  },
  // Adding new counselors in Business field
  {
    id: 3,
    name: "Ms. Jane Smith",
    field: "Business",
    photo: "public/image10.jpg", // Image 12 for Ms. Jane Smith (Business)
    description: "Specialist in Business Strategy and Marketing.",
    page: "/JaneSmith", // Navigation target for Jane Smith in Business
  },
  {
    id: 4,
    name: "Ms. Emily Johnson",
    field: "Business",
    photo: "public/image12.jpg", // Image 13 for Ms. Emily Johnson
    description: "Experienced counselor in Entrepreneurship and Business Growth.",
    page: "/EmilyJohnson", // Navigation target for Emily Johnson in Business
  },
  // Add other counselor data entries here...
];

function Counsellors() {
  const fields = ["Engineering", "Business", "Law", "Medicine"];

  return (
    <div style={{ backgroundColor: '#e6f2ff', padding: '20px' }}>
      <h1>Meet Our Best Counselors</h1>

      {fields.map((field) => (
        <div
          key={field}
          style={{
            marginBottom: '30px',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>{field}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {counselorsData
              .filter((counselor) => counselor.field === field)
              .map((counselor) => (
                <div
                  key={counselor.id}
                  style={{
                    backgroundColor: '#fff',
                    padding: '15px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    to={counselor.page} // Navigate to the specific counselor's page
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <img
                      src={counselor.photo}
                      alt={counselor.name}
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                    <h4 style={{ textAlign: 'center', marginTop: '10px' }}>{counselor.name}</h4>
                  </Link>
                  <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
                    {counselor.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counsellors;
