import React from 'react';

const Notification = ({ type, message }) => {
  // Define styles for different notification types
  const styles = {
    container: {
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      color: '#fff',
      backgroundColor: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff',
    }
  };

  return (
    <div style={styles.container}>
      {message}
    </div>
  );
};

export default Notification;
