import React from "react";
import styled from 'styled-components';

const StyledLogo = styled.svg`
  /* Add your styles here */
  cursor: pointer; /* Add cursor pointer for hover effect */
`;

const FreeCodeCampLogo = () => {
  const handleClick = () => {
    // Handle click event
    console.log("Logo clicked");
  };

  return (
    <StyledLogo
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      onClick={handleClick} // Add click event handler
      aria-label="FreeCodeCamp Logo" // Add aria-label for accessibility
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5.64 8.64l-2.52 2.52L10 18l6-6-1.42-1.42-4.58 4.58z" />
    </StyledLogo>
  );
};

export default FreeCodeCampLogo;
