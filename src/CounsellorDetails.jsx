import { useParams } from "react-router-dom";

const counselorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    field: "Engineering",
    photo: "https://via.placeholder.com/100",
    description: "Experienced career counselor in Engineering fields.",
    bio: "Dr. John Doe has 20+ years of experience guiding students in engineering disciplines.",
  },
  {
    id: 2,
    name: "Ms. Jane Smith",
    field: "Engineering",
    photo: "https://via.placeholder.com/100",
    description: "Expert in Business and Management counseling.",
    bio: "Ms. Jane Smith specializes in business management and has helped 500+ students achieve their goals.",
  },
];

function CounselorDetails() {
  const { id } = useParams(); // Fetch the ID from the URL
const counselor = counselorsData.find((c) => c.id === parseInt(id)); // Match ID with data

  if (!counselor) {
    return <div style={{ padding: "20px" }}>Counselor not found!</div>;
  }
  return (
    <div style={{ padding: "20px", backgroundColor: "#e6f2ff" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={counselor.photo}
          alt={counselor.name}
          style={{ width: "120px", height: "120px", borderRadius: "50%", marginRight: "20px" }}
        />
        <div>
          <h1>{counselor.name}</h1>
          <p><strong>Field:</strong> {counselor.field}</p>
          <p><strong>Description:</strong> {counselor.description}</p>
          <p><strong>Bio:</strong> {counselor.bio}</p>
        </div>
      </div>
    </div>
  );
}


export default CounselorDetails;
