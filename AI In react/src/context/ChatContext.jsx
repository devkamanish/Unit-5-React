import React, { createContext, useContext, useState, useEffect } from "react";
import { sendMessageToGemini } from "../../api";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (userText) => {
    const newMessage = { role: "user", text: userText, timestamp: new Date() };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    const updatedMessages = [...messages, newMessage].map((m) => ({
      role: m.role,
      content: m.text
    }));

    const aiResponse = await sendMessageToGemini(updatedMessages);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: aiResponse, timestamp: new Date() }
    ]);

    setLoading(false);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
