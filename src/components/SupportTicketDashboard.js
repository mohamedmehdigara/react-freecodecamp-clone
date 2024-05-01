// SupportTicketDashboard.js
import React from 'react';
import SupportTicketList from './SupportTicketList';
import SupportTicketFilter from './SupportTicketFilter';
import SupportTicketSearch from './SupportTicketSearch';

const SupportTicketDashboard = () => {
  return (
    <div>
      <h2>Support Ticket Dashboard</h2>
      <SupportTicketFilter />
      <SupportTicketSearch />
      <SupportTicketList />
    </div>
  );
};

export default SupportTicketDashboard;
