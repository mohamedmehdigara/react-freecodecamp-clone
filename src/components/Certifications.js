import React from 'react';
import styled from 'styled-components';

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

const Certifications = ({  }) => {
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
    <Container>
      <Title>Certifications</Title>
      {certifications&&certifications.map((certification, index) => (
        <CertificationItem key={index}>
          <CertificationTitle>{certification.title}</CertificationTitle>
          <CertificationDescription>{certification.description}</CertificationDescription>
        </CertificationItem>
      ))}
    </Container>
  );
};

export default Certifications;
