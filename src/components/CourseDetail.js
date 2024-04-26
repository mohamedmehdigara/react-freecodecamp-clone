import React from 'react';

const CourseDetail = ({ match }) => {
  // Check if match object and params are defined before accessing them
  if (!match || !match.params || !match.params.id) {
    // Handle the case when match or params are undefined
    return <div>Invalid course ID</div>;
  }

  // Sample data for course details (You can fetch actual data from an API or use props)
  const courseId = match.params.id;
  const courseDetails = {
    id: courseId,
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming language.",
    curriculum: ["Lesson 1: Introduction", "Lesson 2: Variables", "Lesson 3: Functions"],
    instructor: {
      name: "John Doe",
      bio: "Experienced JavaScript developer with 10+ years of industry experience.",
    }
  };

  return (
    <div className="course-detail-container">
      <h2>{courseDetails.title}</h2>
      <p>{courseDetails.description}</p>
      <h3>Curriculum</h3>
      <ul>
        {courseDetails.curriculum.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <h3>Instructor</h3>
      <p><strong>Name:</strong> {courseDetails.instructor.name}</p>
      <p><strong>Bio:</strong> {courseDetails.instructor.bio}</p>
    </div>
  );
};

export default CourseDetail;
