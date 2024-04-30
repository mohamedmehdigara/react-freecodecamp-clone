import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CourseListContainer = styled.div`
  /* Add your styles here */
  padding: 20px;
`;

const CourseItem = styled.div`
  /* Add your styles here */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CourseTitle = styled.h3`
  /* Add your styles here */
  font-size: 20px;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  /* Add your styles here */
  font-size: 16px;
`;

const ViewDetailsButton = styled.button`
  /* Add your styles here */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

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
    <CourseListContainer>
      <h2>Available Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <CourseItem key={course.id}>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <Link to={`/learn/${course.id}`}>
              <ViewDetailsButton>View Details</ViewDetailsButton>
            </Link>
          </CourseItem>
        ))}
      </div>
    </CourseListContainer>
  );
};

export default CourseList;
