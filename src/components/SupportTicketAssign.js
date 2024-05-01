import React from 'react';

const SupportTicketAssign = ({ ticket, assignee, onAssign }) => {
  return (
    <div className="support-ticket-assign">
      <h3>Assign Ticket</h3>
      <p>Ticket: {ticket.subject}</p>
      <p>Assignee: {assignee}</p>
      <label htmlFor="assignee">Assign To:</label>
      <input type="text" id="assignee" value={assignee} onChange={(e) => onAssign(e.target.value)} />
      <button onClick={() => onAssign('')}>Clear Assignment</button>
    </div>
  );
};

export default SupportTicketAssign;
