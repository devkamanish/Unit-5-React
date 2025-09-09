import React, { useState } from "react";
import { Feedback } from "../types/feedback";

interface FeedbackFormProps {
  onAddFeedback: (feedback: Feedback) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onAddFeedback }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newFeedback: Feedback = {
      id: Date.now().toString(),
      name,
      email,
      rating,
      comments,
      date: new Date().toLocaleString(),
    };

    onAddFeedback(newFeedback);

    // Reset form
    setName("");
    setEmail("");
    setRating(0);
    setComments("");
    alert("Thank you for your feedback!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Customer Feedback</h2>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Rating (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        required
      />

      <label>Comments:</label>
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
      ></textarea>

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
