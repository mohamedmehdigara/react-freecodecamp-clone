import React, { useState } from 'react';

const DiscussionForum = () => {
  // State to manage new thread input
  const [newThread, setNewThread] = useState('');
  // State to store list of threads
  const [threads, setThreads] = useState([]);

  // Function to handle input change for new thread
  const handleNewThreadChange = (e) => {
    setNewThread(e.target.value);
  };

  // Function to handle form submission for posting a new thread
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new thread to the list of threads
    setThreads([...threads, { id: threads.length + 1, title: newThread, comments: [] }]);
    // Clear the input field after posting
    setNewThread('');
  };

  return (
    <div>
      <h1>Discussion Forum</h1>
      {/* Form for posting new threads */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your thread title"
          value={newThread}
          onChange={handleNewThreadChange}
        />
        <button type="submit">Post</button>
      </form>
      {/* List of existing threads */}
      <div>
        {threads.map((thread) => (
          <div key={thread.id}>
            <h3>{thread.title}</h3>
            {/* Add functionality for displaying comments */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
