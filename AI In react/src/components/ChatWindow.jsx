import React, { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  const { messages } = useChat();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;
