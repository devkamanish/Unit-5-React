import React, { useState, useEffect } from "react";
import { addOrUpdateEntry, getEntriesByUser } from "../utils/storage";

function todayDate() {
  const d = new Date();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export default function HabitForm({ user, onSaved }) {
  const [date, setDate] = useState(todayDate());
  const [form, setForm] = useState({
    studyHours: "", breakTime: "", sleep: "", stress: 5, focus: 5, reflection: ""
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const entries = getEntriesByUser(user.id, date.slice(0,7)); 
    const entry = entries.find(e => e.date === date);
    if (entry) setForm({
      studyHours: entry.studyHours || "",
      breakTime: entry.breakTime || "",
      sleep: entry.sleep || "",
      stress: entry.stress || 5,
      focus: entry.focus || 5,
      reflection: entry.reflection || ""
    });
    else setForm({ studyHours: "", breakTime: "", sleep: "", stress: 5, focus: 5, reflection: "" });
  }, [date, user.id]);

  function setField(k, v) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  function save(e) {
    e?.preventDefault();
    setStatus("Saving...");
    const entry = {
      userId: user.id,
      date,
      studyHours: Number(form.studyHours) || 0,
      breakTime: Number(form.breakTime) || 0,
      sleep: Number(form.sleep) || 0,
      stress: Number(form.stress) || 0,
      focus: Number(form.focus) || 0,
      reflection: form.reflection || ""
    };
    addOrUpdateEntry(entry);
    setStatus("Saved");
    onSaved?.();
    setTimeout(()=>setStatus(""), 1200);
  }

  return (
    <form className="card" onSubmit={save}>
      <h3>Daily Study & Wellness</h3>
      <div className="grid">
        <div className="col-6">
          <label>Date</label>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
        </div>
        <div className="col-6">
          <label>Study Hours</label>
          <input type="number" min="0" step="0.5" value={form.studyHours} onChange={e=>setField("studyHours", e.target.value)} />
        </div>
        <div className="col-4">
          <label>Break Time (mins)</label>
          <input type="number" min="0" value={form.breakTime} onChange={e=>setField("breakTime", e.target.value)} />
        </div>
        <div className="col-4">
          <label>Sleep (hrs)</label>
          <input type="number" min="0" step="0.5" value={form.sleep} onChange={e=>setField("sleep", e.target.value)} />
        </div>
        <div className="col-4">
          <label>Stress (1-10)</label>
          <input type="number" min="1" max="10" value={form.stress} onChange={e=>setField("stress", e.target.value)} />
        </div>
        <div className="col-12">
          <label>Focus (1-10)</label>
          <input type="number" min="1" max="10" value={form.focus} onChange={e=>setField("focus", e.target.value)} />
        </div>
        <div className="col-12">
          <label>Reflection</label>
          <textarea rows={4} value={form.reflection} onChange={e=>setField("reflection", e.target.value)} />
        </div>

        <div className="col-12 actions" style={{justifyContent:"space-between"}}>
          <div className="small">{status}</div>
          <div>
            <button className="btn" type="submit">Save</button>
          </div>
        </div>
      </div>
    </form>
  );
}
