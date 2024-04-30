import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* Add your styles here */
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const Label = styled.label`
  /* Add your styles here */
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  /* Add your styles here */
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  /* Add your styles here */
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  /* Add your styles here */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Feedback = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    // Reset form fields after submission
    setRating(0);
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="rating">Rating:</Label>
        <Select id="rating" value={rating} onChange={handleRatingChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="comment">Comment:</Label>
        <TextArea id="comment" value={comment} onChange={handleCommentChange} />
      </FormGroup>
      <SubmitButton type="submit">Submit Feedback</SubmitButton>
    </Form>
  );
};

export default Feedback;
