import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  /* Add your styles here */
`;

const Form = styled.form`
  /* Add your styles here */
`;

const FormGroup = styled.div`
  /* Add your styles here */
  margin-bottom: 1rem;
`;

const Label = styled.label`
  /* Add your styles here */
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  /* Add your styles here */
  width: 100%;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  /* Add your styles here */
  width: 100%;
  padding: 0.5rem;
`;

const Button = styled.button`
  /* Add your styles here */
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SupportTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
    attachments: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData);
      // Clear form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        description: '',
        attachments: null,
      });
      // Clear errors
      setErrors({});
    } else {
      // Display validation errors
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!data.description.trim()) {
      errors.description = 'Description is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span>{errors.subject}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span>{errors.description}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="attachments">Attachments</Label>
          <Input
            type="file"
            id="attachments"
            name="attachments"
            onChange={(e) => setFormData({ ...formData, attachments: e.target.files })}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default SupportTicketForm;
