import React from 'react';
import styled from 'styled-components';

// Styled components for the Certifications component
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CertificationItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CertificationTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CertificationDescription = styled.p`
  font-size: 16px;
`;

// Function to open the verification link in a new tab
const openVerificationLink = (link) => {
  window.open(link, '_blank');
};

const Certifications = () => {
  // Array of certifications data
  const certifications = [
    {
      title: "JavaScript Fundamentals",
      description: "Completed on April 15, 2023. Covered the basics of JavaScript programming language.",
      verificationLink: "https://example.com/certification/jsfundamentals"
    },
    {
      title: "React Developer Certification",
      description: "Completed on May 20, 2023. Demonstrated proficiency in building web applications with React.",
      verificationLink: "https://example.com/certification/reactdeveloper"
    },
    // Add more certifications as needed
  ];

  return (
    <Container>
      <Title>Certifications</Title>
      {/* Map through the certifications array and render each certification item */}
      {certifications.map((certification, index) => (
        <CertificationItem key={index}>
          <CertificationTitle>{certification.title}</CertificationTitle>
          <CertificationDescription>{certification.description}</CertificationDescription>
          {/* Button to verify certification, opens the verification link in a new tab */}
          <button onClick={() => openVerificationLink(certification.verificationLink)}>Verify</button>
        </CertificationItem>
      ))}
    </Container>
  );
};

export default Certifications;
