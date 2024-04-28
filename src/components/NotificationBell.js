import React, { useState } from 'react';
import Notification from './NotificationBell';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);

  const handleNotificationClick = () => {
    // Fetch notifications or toggle visibility of notifications list
    // For simplicity, let's toggle an example notification
    const newNotification = { id: Date.now(), type: 'info', message: 'New course available: React Advanced Techniques' };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      {/* Bell icon */}
      <span onClick={handleNotificationClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.59 1.05 5.2 3.04 7.07L12 22l6.96-2.93C20.95 17.2 22 14.59 22 12c0-5.52-4.48-10-10-10zm1 17h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
        </svg>
      </span>

      {/* Notifications list */}
      {notifications.length > 0 && (
        <div className="notifications-list">
          {notifications.map(notification => (
            <Notification key={notification.id} type={notification.type} message={notification.message} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;

