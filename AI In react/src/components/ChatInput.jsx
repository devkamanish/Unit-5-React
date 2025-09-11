import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

const ChatInput = () => {
  const { sendMessage, loading } = useChat();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
};

export default ChatInput;
