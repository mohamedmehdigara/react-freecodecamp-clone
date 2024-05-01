import React, { useState } from 'react';
import SupportTicketForm from './SupportTicketForm';
import SupportTicketList from './SupportTicketList';
import SupportTicketDetail from './SupportTicketDetail';
import SupportTicketStatus from './SupportTicketStatus';
import SupportTicketSubmissionSuccess from './SupportTicketSubmissionSuccess';
import SupportTicketUpdateForm from './SupportTicketUpdateForm';
import SupportTicketDashboard from './SupportTicketDashboard';
import SupportTicketAdminPanel from './SupportTicketAdminPanel';
import SupportTicketAnalytics from './SupportTicketAnalytics';
import SupportTicketAssign from './SupportTicketAssign';
import SupportTicketPriority from './SupportTicketPriority';
import SupportTicketChart from './SupportTicketChart';
import SupportTicketMetrics from './SupportTicketMetrics';
import SupportTicketFilter from './SupportTicketFilter';
import SupportTicketSearch from './SupportTicketSearch';

const Support = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Mock data for support tickets
  const supportTickets = [
    {
      id: 1,
      subject: "Issue with login",
      status: "Open",
      description: "I'm having trouble logging into my account.",
      assignee: "Support Team",
      priority: "High"
    },
    {
      id: 2,
      subject: "Payment not processing",
      status: "In Progress",
      description: "My payment is not going through. Please help.",
      assignee: "Support Team",
      priority: "Medium"
    },
    // Add more tickets as needed
  ];

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleTicketUpdate = (updatedTicket) => {
    // Update the ticket in the list
    const updatedTickets = supportTickets.map((ticket) =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    // Update the state with the updated ticket list
    // For demonstration purposes, we are not updating the state here
    console.log("Updated ticket:", updatedTicket);
  };

  return (
    <div>
      <h1>Support Center</h1>
      {/* Render components for support ticket management */}
      <SupportTicketForm />
      <SupportTicketList tickets={supportTickets} onSelect={handleTicketSelect} />
      <SupportTicketDetail ticket={selectedTicket} onUpdate={handleTicketUpdate} />
      <SupportTicketStatus tickets={supportTickets} />
      <SupportTicketSubmissionSuccess />
      <SupportTicketUpdateForm ticket={selectedTicket} onUpdate={handleTicketUpdate} />
      <SupportTicketDashboard />
      <SupportTicketAdminPanel />
      <SupportTicketAnalytics />
      <SupportTicketAssign ticket={selectedTicket} onUpdate={handleTicketUpdate} />
      <SupportTicketPriority ticket={selectedTicket} onUpdate={handleTicketUpdate} />
      <SupportTicketChart tickets={supportTickets} />
      <SupportTicketMetrics tickets={supportTickets} />
      <SupportTicketFilter />
      <SupportTicketSearch />
    </div>
  );
};

export default Support;
