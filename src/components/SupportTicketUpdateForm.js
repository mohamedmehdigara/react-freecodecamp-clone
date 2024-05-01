import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  /* Add your styles here */
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SupportTicketUpdateForm = ({ onSubmit }) => {
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call onSubmit function with status and comment as parameters
    onSubmit(status, comment);
    // Clear form fields after submission
    setStatus('');
    setComment('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <InputLabel>Status:</InputLabel>
          <TextInput
            type="text"
            value={status}
            onChange={handleStatusChange}
            placeholder="Enter new status"
          />
        </FormField>
        <FormField>
          <InputLabel>Comment:</InputLabel>
          <TextArea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
          />
        </FormField>
        <Button type="submit">Update Ticket</Button>
      </form>
    </FormContainer>
  );
};

export default SupportTicketUpdateForm;
