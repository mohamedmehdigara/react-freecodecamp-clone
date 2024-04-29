import React, { useState } from 'react';
import Rating from 'react-rating';

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
    <div className="rating-review-container">
      <h3>Rate and Review this Course</h3>
      <div className="rating">
        <span>Rating:</span>
        <Rating
          initialRating={rating}
          onChange={handleRatingChange}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        />
      </div>
      <div className="review">
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={handleReviewChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CourseRatingAndReview;
