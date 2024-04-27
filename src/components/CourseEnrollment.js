import React, { useState } from 'react';

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
    <div>
      {enrolled ? (
        <p>You are enrolled in this course.</p>
      ) : (
        <>
          <button onClick={handleEnroll} disabled={loading}>
            {loading ? 'Enrolling...' : 'Enroll in Course'}
          </button>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default CourseEnrollment;
