import React, { useState } from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';

const RatingReviewContainer = styled.div`
  /* Add your styles here */
  margin-top: 20px;
`;

const RatingContainer = styled.div`
  /* Add your styles here */
  margin-bottom: 10px;
`;

const ReviewTextarea = styled.textarea`
  /* Add your styles here */
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  /* Add your styles here */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CourseRatingAndReview = ({ courseId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    // Implement logic to submit rating and review
    console.log(`Rating: ${rating}, Review: ${review}`);
    // Clear the form after submission
    setRating(0);
    setReview('');
  };

  return (
    <RatingReviewContainer>
      <h3>Rate and Review this Course</h3>
      <RatingContainer>
        <span>Rating:</span>
        <Rating
          initialRating={rating}
          onChange={handleRatingChange}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        />
      </RatingContainer>
      <ReviewTextarea
        placeholder="Write your review..."
        value={review}
        onChange={handleReviewChange}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </RatingReviewContainer>
  );
};

export default CourseRatingAndReview;
