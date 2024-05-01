import React from 'react';
import styled from 'styled-components';

const TicketStatusContainer = styled.div`
  /* Add your styles here */
`;

const TicketStatusItem = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const SupportTicketStatus = ({ tickets }) => {
  return (
    <TicketStatusContainer>
      <h2>Support Ticket Status</h2>
      {tickets.map((ticket, index) => (
        <TicketStatusItem key={index}>
          <h3>{ticket.subject}</h3>
          <div>Status: {ticket.status}</div>
          <div>
            {ticket.updates && (
              <>
                <h4>Updates</h4>
                <ul>
                  {ticket.updates.map((update, updateIndex) => (
                    <li key={updateIndex}>{update}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            {ticket.comments && (
              <>
                <h4>Comments</h4>
                <ul>
                  {ticket.comments.map((comment, commentIndex) => (
                    <li key={commentIndex}>{comment}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </TicketStatusItem>
      ))}
    </TicketStatusContainer>
  );
};

export default SupportTicketStatus;
