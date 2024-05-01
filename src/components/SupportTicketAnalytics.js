// SupportTicketAnalytics.js
import React from 'react';
import SupportTicketChart from './SupportTicketChart';
import SupportTicketMetrics from './SupportTicketMetrics';

const SupportTicketAnalytics = () => {
  return (
    <div>
      <h2>Support Ticket Analytics</h2>
      <SupportTicketChart />
      <SupportTicketMetrics />
    </div>
  );
};

export default SupportTicketAnalytics;
