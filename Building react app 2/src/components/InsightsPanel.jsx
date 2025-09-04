import React from "react";

export default function InsightsPanel({ streak = 0, insights = [], has7Days = false }) {
  return (
    <div className="card">
      <h3>Insights & Motivation</h3>
      <p>Current streak: <b>{streak}</b> days</p>
      {has7Days ? (
        <ul>
          {insights.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      ) : (
        <p className="small">Log 7 days to unlock insights.</p>
      )}
      <p className="small">Gentle reminder: consistency beats intensity. Log a small win today.</p>
    </div>
  )
}
