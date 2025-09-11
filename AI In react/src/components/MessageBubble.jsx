import React from "react";

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <div
      className={`message-bubble ${isUser ? "user" : "assistant"}`}
    >
      <p>{message.text}</p>
      <span className="timestamp">
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
};

export default MessageBubble;
