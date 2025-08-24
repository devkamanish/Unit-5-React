import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const NotificationList = () => {
  const { notifications } = useContext(NotificationContext);
    
  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        <ul>
          {notifications.map((n) => (
            <li
              key={n.id}
              style={{
                fontWeight: n.read ? "normal" : "bold",
                color: n.read ? "gray" : "black",
              }}
            >
              {n.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
