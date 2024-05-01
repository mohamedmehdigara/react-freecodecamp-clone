import React from 'react';

const SupportTicketPriority = ({ ticket, priority, onSetPriority }) => {
  return (
    <div className="support-ticket-priority">
      <h3>Set Priority</h3>
      <p>Ticket: {ticket.subject}</p>
      <p>Current Priority: {priority}</p>
      <label htmlFor="priority">Select Priority:</label>
      <select id="priority" value={priority} onChange={(e) => onSetPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default SupportTicketPriority;
