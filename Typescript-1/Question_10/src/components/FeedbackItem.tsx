import React from "react";
import { Feedback } from "../types/feedback";

interface FeedbackItemProps {
  feedback: Feedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <tr>
      <td>{feedback.name}</td>
      <td>{feedback.email}</td>
      <td>{feedback.rating}</td>
      <td>{feedback.comments}</td>
      <td>{feedback.date}</td>
    </tr>
  );
};

export default FeedbackItem;
