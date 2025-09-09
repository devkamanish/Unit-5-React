import React, { useState } from "react";
import { Feedback } from "../types/feedback";
import FeedbackItem from "./FeedbackItem";

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  const [search, setSearch] = useState("");

  const filtered = feedbacks.filter((fb) =>
    fb.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-container">
      <h2>Feedback Submissions</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Comments</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((fb) => <FeedbackItem key={fb.id} feedback={fb} />)
          ) : (
            <tr>
              <td colSpan={5}>No feedback found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
