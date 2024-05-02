import React, { useState } from 'react';
import styled from 'styled-components';

const TicketListContainer = styled.div`
  /* Add your styles here */
`;

const TicketItem = styled.div`
  /* Add your styles here */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const TicketSubject = styled.h3`
  /* Add your styles here */
  margin-bottom: 5px;
`;

const TicketStatus = styled.div`
  /* Add your styles here */
  font-weight: bold;
  color: ${props => {
    switch (props.status) {
      case 'open':
        return 'green';
      case 'inProgress':
        return 'orange';
      case 'resolved':
        return 'blue';
      default:
        return 'black';
    }
  }};
`;

const SupportTicketList = ({ tickets, onTicketClick }) => {
  // Example tickets data structure:
  // const tickets = [
  //   { id: 1, subject: 'Issue with login', status: 'open', dateSubmitted: '2022-04-25' },
  //   { id: 2, subject: 'Problem with payment', status: 'resolved', dateSubmitted: '2022-04-24' },
  //   // Add more tickets as needed
  // ];

  return (
    <TicketListContainer>
      {tickets&&tickets.map(ticket => (
        <TicketItem key={ticket.id} onClick={() => onTicketClick(ticket)}>
          <TicketSubject>{ticket.subject}</TicketSubject>
          <TicketStatus status={ticket.status}>{ticket.status}</TicketStatus>
          <div>Date Submitted: {ticket.dateSubmitted}</div>
        </TicketItem>
      ))}
    </TicketListContainer>
  );
};

export default SupportTicketList;
