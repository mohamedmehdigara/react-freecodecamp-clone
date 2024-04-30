import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* Add your styles here */
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  /* Add your styles here */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const Button = styled.button`
  /* Add your styles here */
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
