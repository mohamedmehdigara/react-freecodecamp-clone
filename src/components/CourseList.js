import React from 'react';

const CourseList = () => {
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Master the fundamentals of building web applications with React.",
    },
    // Add more course objects as needed
  ];

  return (
    <div className="course-list-container">
      <h2>Available Courses</h2>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
