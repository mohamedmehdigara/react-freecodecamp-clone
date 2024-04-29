import React from 'react';
import ProgressTracker from './ProgressTracker';

const CourseContentPage = () => {
  // Sample data for course progress
  const totalItems = 10; // Total number of items in the course
  const completedItems = 5; // Number of items completed by the user

  return (
    <div className="course-content-page">
      <h1>Course Content</h1>
      {/* Render course content here */}
      <p>This is where you can view the course content.</p>
      <h2>Course Progress</h2>
      <ProgressTracker totalItems={totalItems} completedItems={completedItems} />
    </div>
  );
};

export default CourseContentPage;
