import React from "react";
import "./index.css";

const Notification = ({ message, closeSideNotification = () => {} }) => {
  console.log(message);
  return (
    <div className="notification-container">
      <button className="close-icon" onClick={closeSideNotification}>
        x
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
