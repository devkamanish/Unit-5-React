import React, { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { Feedback } from "./types/feedback";
import "./App.css";

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("feedbacks");
    if (saved) {
      setFeedbacks(JSON.parse(saved));
    }
  }, []);

  const addFeedback = (feedback: Feedback) => {
    const updated = [...feedbacks, feedback];
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));
  };

  return (
    <div className="app-container">
      <FeedbackForm onAddFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
