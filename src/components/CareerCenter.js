import React from 'react';
import styled from 'styled-components';

// Define styled components for the CareerCenterComponent
const CareerCenterContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const JobListing = styled.div`
  margin-bottom: 20px;
`;

const CareerCenter = () => {
  // Sample job listings data
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Co.",
      location: "Remote",
      postedDate: "1 day ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum...",
      applyLink: "#",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Startup Inc.",
      location: "New York, NY",
      postedDate: "2 days ago",
      description: "Integer varius posuere tortor, eget fermentum elit. Proin vehicula...",
      applyLink: "#",
    },
    // Add more job listings as needed
  ];

  return (
    <CareerCenterContainer>
      <SectionTitle>Job Listings</SectionTitle>
      {jobListings.map((job) => (
        <JobListing key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>{job.postedDate}</p>
          <p>{job.description}</p>
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply</a>
        </JobListing>
      ))}
      {/* Add resume tips, interview preparation materials, and networking resources */}
    </CareerCenterContainer>
  );
};

export default CareerCenter;
