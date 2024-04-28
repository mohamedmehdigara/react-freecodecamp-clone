import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 10px;
`;

const Item = styled.div`
  text-align: center;
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <Button onClick={goToPrevious}>Previous</Button>
      <Item>
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <h3>{items[currentIndex].title}</h3>
        <p>{items[currentIndex].description}</p>
      </Item>
      <Button onClick={goToNext}>Next</Button>
    </Container>
  );
};

export default Carousel;
