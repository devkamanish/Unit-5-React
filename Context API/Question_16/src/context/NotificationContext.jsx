import React, { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  // Add a new notification
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // Stop notifications
  const stopNotifications = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // Simulate new notifications every 5s
  useEffect(() => {
    const id = setInterval(() => {
      addNotification("You have a new message!");
    }, 5000);
    
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllAsRead,
        stopNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
