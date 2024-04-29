import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EnrollmentContainer = styled.div`
  /* Add your styles here */
`;

const EnrollButton = styled.button`
  /* Add your styles here */
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  /* Add your styles here */
  color: #dc3545;
`;

const CourseEnrollment = ({ courseId, onEnroll }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEnroll = async () => {
    setLoading(true);
    try {
      // Simulate enrollment process (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setEnrolled(true);
      onEnroll(courseId);
    } catch (err) {
      setError('Failed to enroll in the course. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <EnrollmentContainer>
      {enrolled ? (
        <p>You are enrolled in this course.</p>
      ) : (
        <>
          <EnrollButton onClick={handleEnroll} disabled={loading}>
            {loading ? 'Enrolling...' : 'Enroll in Course'}
          </EnrollButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </EnrollmentContainer>
  );
};

export default CourseEnrollment;
