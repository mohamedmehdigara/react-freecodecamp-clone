// SupportTicketAdminPanel.js
import React from 'react';
import SupportTicketList from './SupportTicketList';
import SupportTicketAssign from './SupportTicketAssign';
import SupportTicketPriority from './SupportTicketPriority';

const SupportTicketAdminPanel = () => {
  return (
    <div>
      <h2>Support Ticket Admin Panel</h2>
      <SupportTicketAssign />
      <SupportTicketPriority />
      <SupportTicketList />
    </div>
  );
};

export default SupportTicketAdminPanel;
