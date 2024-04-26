import React from 'react';

const CourseDetail = ({ match }) => {
  // Sample data for course details (You can fetch actual data from an API or use props)
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

  // Extract course ID from URL params
  const courseId = match?.params?.id;

  // Get course details based on the course ID
  const courseDetails = courses[courseId];

  // Function to format duration (e.g., 4 weeks -> 1 month)
  const formatDuration = (duration) => {
    // Implement your logic to format duration here
    return duration;
  };

  // Render course details or error message
  const renderContent = () => {
    if (!courseDetails) {
      return <div>Invalid course ID</div>;
    }

    return (
      <div className="course-detail-container">
        <div className="course-header">
          <h2>{courseDetails.title}</h2>
          <p>{courseDetails.description}</p>
        </div>
        <div className="course-info">
          <div>
            <h3>Course Details</h3>
            <p><strong>Duration:</strong> {formatDuration(courseDetails.duration)}</p>
            <p><strong>Price:</strong> ${courseDetails.price}</p>
            <p><strong>Rating:</strong> {courseDetails.rating} ({courseDetails.reviews} reviews)</p>
          </div>
          <div>
            <h3>Instructor</h3>
            <div className="instructor-info">
              <img src={courseDetails.instructor.image} alt={courseDetails.instructor.name} />
              <div>
                <p><strong>Name:</strong> {courseDetails.instructor.name}</p>
                <p><strong>Bio:</strong> {courseDetails.instructor.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="curriculum">
          <h3>Curriculum</h3>
          <ul>
            {courseDetails.curriculum.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default CourseDetail;
