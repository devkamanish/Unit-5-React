import React from "react";
import { ChatProvider } from "./context/ChatContext";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <ChatProvider>
      <div className="app-container">
        <h1>🤖 AI Chat (Gemini)</h1>
        <ChatWindow />
        <ChatInput />
      </div>
    </ChatProvider>
  );
}

export default App;
