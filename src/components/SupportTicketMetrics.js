import React from 'react';

const SupportTicketMetrics = ({ totalTickets, openTickets, resolvedTickets }) => {
  return (
    <div>
      <h2>Support Ticket Metrics</h2>
      <p>Total Tickets: {totalTickets}</p>
      <p>Open Tickets: {openTickets}</p>
      <p>Resolved Tickets: {resolvedTickets}</p>
    </div>
  );
};

export default SupportTicketMetrics;
