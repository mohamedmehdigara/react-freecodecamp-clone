import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import CourseEnrollment from './CourseEnrollment';
import CourseRatingAndReview from './CourseRatingAndReview';
import CourseNavigation from './CourseNavigation';
import styled from 'styled-components';

const CourseDetailContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CourseHeader = styled.div`
  margin-bottom: 20px;
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Curriculum = styled.div`
  margin-top: 20px;
`;

const CourseDetail = () => {
  const totalItems = 10; // Total number of items in the course
  const completedItems = 5; // Number of items completed by the user

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

  const [courseEnrolled, setCourseEnrolled] = useState(false);

  // Use useEffect to automatically change courseEnrolled state after 3 seconds
  useEffect(() => {
    if (courseEnrolled) {
      const timer = setTimeout(() => {
        setCourseEnrolled(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [courseEnrolled]);

  const handleEnroll = () => {
    // Implement logic to enroll user in course
    console.log(`Enrolled in course: ${courseDetails.title}`);
    setCourseEnrolled(true);
  };

  if (!courseDetails) {
    return <Navigate to="/" />; // Redirect to home page if course not found
  }

  return (
    <CourseDetailContainer>
      <CourseHeader>
        <h2>{courseDetails.title}</h2>
        <p>{courseDetails.description}</p>
      </CourseHeader>
      <CourseInfo>
        <div>
          <h3>Course Details</h3>
          <p><strong>Duration:</strong> {formatDuration(courseDetails.duration)}</p>
          <p><strong>Price:</strong> ${courseDetails.price}</p>
          <p><strong>Rating:</strong> {courseDetails.rating} ({courseDetails.reviews} reviews)</p>
        </div>
        <div>
          <h3>Instructor</h3>
          <InstructorInfo>
            <img src={courseDetails.instructor.image} alt={courseDetails.instructor.name} />
            <div>
              <p><strong>Name:</strong> {courseDetails.instructor.name}</p>
              <p><strong>Bio:</strong> {courseDetails.instructor.bio}</p>
            </div>
          </InstructorInfo>
        </div>
      </CourseInfo>
      <Curriculum>
        <h3>Curriculum</h3>
        <ul>
          {courseDetails.curriculum.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      </Curriculum>
      {!courseEnrolled && <CourseEnrollment courseId={id} onEnroll={handleEnroll} />} {/* Render the CourseEnrollment component only if course is not enrolled */}
      {courseEnrolled && <Link to={`/course-content/${id}`}>Go to Course</Link>} {/* Render the "Go to Course" link only if course is enrolled */}
      <h2>Course Progress</h2>
      <CourseRatingAndReview courseId={id} />
      <CourseNavigation sections={[
  { title: 'Section 1', link: '/course-content/section1' },
  { title: 'Section 2', link: '/course-content/section2' },
  // Add more sections as needed
]} />
    </CourseDetailContainer>
  );
};

export default CourseDetail;
