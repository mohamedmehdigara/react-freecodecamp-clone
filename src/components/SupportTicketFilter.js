import React, { useState } from 'react';

const SupportTicketFilter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    onChange(value); // Pass the filter value to the parent component
  };

  return (
    <div>
      <h3>Filter Tickets</h3>
      <select value={filter} onChange={handleChange}>
        <option value="">All</option>
        <option value="open">Open</option>
        <option value="resolved">Resolved</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default SupportTicketFilter;
