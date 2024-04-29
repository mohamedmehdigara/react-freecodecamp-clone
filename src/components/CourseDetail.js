import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import CourseEnrollment from './CourseEnrollment';
import styled from 'styled-components';

const CourseDetailContainer = styled.div`
  /* Add your styles here */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CourseHeader = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const CourseInfo = styled.div`
  /* Add your styles here */
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InstructorInfo = styled.div`
  /* Add your styles here */
  display: flex;
  align-items: center;
`;

const Curriculum = styled.div`
  /* Add your styles here */
  margin-top: 20px;
`;

// Example styles:

// CourseDetailContainer: Add padding, margin, border, etc. to the container.

// CourseHeader: Add margin-bottom to create space between header and content.

// CourseInfo: Use flexbox to align items evenly, adjust margin-bottom for spacing.

// InstructorInfo: Use flexbox to align image and text, adjust styles as needed.

// Curriculum: Add margin-top to create space between course info and curriculum.

const CourseDetail = () => {
  const courses = {
    1: {
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      curriculum: ["Lesson 1: Introduction", "Lesson 2: Variables", "Lesson 3: Functions"],
      instructor: {
        name: "John Doe",
        bio: "Experienced JavaScript developer with 10+ years of industry experience.",
        image: "instructor.jpg"
      },
      price: 99.99,
      duration: "4 weeks",
      rating: 4.5,
      reviews: 120
    },
    2: {
      title: "React Fundamentals",
      description: "Master the fundamentals of building web applications with React.",
      curriculum: ["Lesson 1: Introduction to React", "Lesson 2: Components", "Lesson 3: State and Props"],
      instructor: {
        name: "Jane Smith",
        bio: "Senior React developer with expertise in building complex UIs.",
        image: "instructor2.jpg"
      },
      price: 129.99,
      duration: "6 weeks",
      rating: 4.8,
      reviews: 150
    }
    // Add more courses as needed
  };

  const { id } = useParams();
  const courseDetails = courses[id];

  const formatDuration = (duration) => {
    // Add logic to format duration here if needed
    return duration;
  };

  const handleEnroll = () => {
    // Implement logic to enroll user in course
    console.log(`Enrolled in course: ${courseDetails.title}`);
  };

  if (!courseDetails) {
    return <Navigate to="/" />; // Redirect to home page if course not found
  }

  return (
    <CourseDetailContainer className="course-detail-container">
      <CourseHeader className="course-header">
        <h2>{courseDetails.title}</h2>
        <p>{courseDetails.description}</p>
      </CourseHeader>
      <CourseInfo className="course-info">
        <div>
          <h3>Course Details</h3>
          <p><strong>Duration:</strong> {formatDuration(courseDetails.duration)}</p>
          <p><strong>Price:</strong> ${courseDetails.price}</p>
          <p><strong>Rating:</strong> {courseDetails.rating} ({courseDetails.reviews} reviews)</p>
        </div>
        <div>
          <h3>Instructor</h3>
          <InstructorInfo className="instructor-info">
            <img src={courseDetails.instructor.image} alt={courseDetails.instructor.name} />
            <div>
              <p><strong>Name:</strong> {courseDetails.instructor.name}</p>
              <p><strong>Bio:</strong> {courseDetails.instructor.bio}</p>
            </div>
          </InstructorInfo>
        </div>
      </CourseInfo>
      <Curriculum className="curriculum">
        <h3>Curriculum</h3>
        <ul>
          {courseDetails.curriculum.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      </Curriculum>
      <CourseEnrollment courseId={id} /> {/* Render the CourseEnrollment component */}
    
    </CourseDetailContainer>
  );
};

export default CourseDetail;
