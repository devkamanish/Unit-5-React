import React from "react";

export default function EntriesTable({ entries = [] }) {
  return (
    <div className="card">
      <h3>Timeline</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th><th>Study</th><th>Break</th><th>Sleep</th><th>Stress</th><th>Focus</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 && (
            <tr><td colSpan="6" className="small">No entries for this month</td></tr>
          )}
          {entries.map(e => (
            <tr key={e.id || e.date}>
              <td>{e.date}</td>
              <td>{e.studyHours}</td>
              <td>{e.breakTime}</td>
              <td>{e.sleep}</td>
              <td>{e.stress}</td>
              <td>{e.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
