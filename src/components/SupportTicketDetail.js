import React, { useState } from 'react';
import NotificationService from './NotificationService'; // Import NotificationService

import styled from 'styled-components';

const TicketDetailContainer = styled.div`
  /* Add your styles here */
`;

const TicketHeader = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const TicketSubject = styled.h2`
  /* Add your styles here */
  margin-bottom: 10px;
`;

const TicketUserInfo = styled.div`
  /* Add your styles here */
`;

const TicketDescription = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const TicketAttachments = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
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

const TicketComments = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const SupportTicketDetail = ({ ticket, onUpdateStatus, onAddComment }) => {
  const [comment, setComment] = useState('');

  if (!ticket) {
    return <div>Loading...</div>; // Or handle the null case appropriately
  }

  const handleStatusUpdate = (status) => {
    // Call the onUpdateStatus callback with the new status
    onUpdateStatus(ticket.id, status);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Call the onAddComment callback with the comment text
    onAddComment(ticket.id, comment);
    // Clear the comment input field
    setComment('');
  };

  const handleUpdateTicket = () => {
    // Update ticket logic...
    NotificationService.success('Ticket updated successfully!');
  };

  const handleUpdate = () => {
    // Update ticket logic
    // Show notification after updating ticket
    NotificationService.show('Ticket updated successfully!', 'success');
  };

  return (
    <TicketDetailContainer>
      <TicketHeader>
        <TicketSubject>{ticket.subject}</TicketSubject>
        <TicketUserInfo>
          User: {ticket.user.name} ({ticket.user.email})
        </TicketUserInfo>
        <TicketStatus status={ticket.status}>{ticket.status}</TicketStatus>
      </TicketHeader>
      <TicketDescription>{ticket.description}</TicketDescription>
      {ticket.attachments && (
        <TicketAttachments>
          Attachments:
          {ticket.attachments.map((attachment, index) => (
            <div key={index}>{attachment}</div>
          ))}
        </TicketAttachments>
      )}
      <div>
        <button onClick={() => handleStatusUpdate('inProgress')}>Mark as In Progress</button>
        <button onClick={() => handleStatusUpdate('resolved')}>Mark as Resolved</button>
      </div>
      <TicketComments>
        <h3>Add Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        {ticket.comments && (
          <div>
            <h3>Comments</h3>
            {ticket.comments.map((comment, index) => (
              <div key={index}>
                <div>{comment.text}</div>
                <div>Posted by: {comment.user}</div>
              </div>
            ))}

<button onClick={handleUpdate}>Update Ticket</button>

          </div>
        )}

<button onClick={handleUpdateTicket}>Update Ticket</button>

      </TicketComments>
    </TicketDetailContainer>
  );
};

export default SupportTicketDetail;
