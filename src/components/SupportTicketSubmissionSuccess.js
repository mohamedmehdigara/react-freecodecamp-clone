import React from 'react';
import styled from 'styled-components';

const SuccessMessageContainer = styled.div`
  /* Add your styles here */
`;

const SupportTicketSubmissionSuccess = () => {
  return (
    <SuccessMessageContainer>
      <h2>Support Ticket Submitted Successfully</h2>
      <p>
        Thank you for contacting support! Your ticket has been successfully submitted.
        We will review your request and get back to you as soon as possible.
      </p>
      <p>
        You can expect an email confirmation shortly with further details. 
        If you need immediate assistance, please don't hesitate to contact us directly.
      </p>
    </SuccessMessageContainer>
  );
};

export default SupportTicketSubmissionSuccess;
