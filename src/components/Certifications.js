import React from 'react';

const Certifications = () => {
  // Sample data for certifications (You can fetch actual data from an API or use props)
  const certifications = [
    {
      name: "JavaScript Fundamentals",
      completionDate: "April 15, 2023",
      verificationLink: "https://example.com/certification/jsfundamentals"
    },
    {
      name: "React Developer Certification",
      completionDate: "May 20, 2023",
      verificationLink: "https://example.com/certification/reactdeveloper"
    },
    // Add more certifications as needed
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((certification, index) => (
          <li key={index}>
            <h3>{certification.name}</h3>
            <p><strong>Completion Date:</strong> {certification.completionDate}</p>
            <a href={certification.verificationLink} target="_blank" rel="noopener noreferrer">Verify Certification</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
