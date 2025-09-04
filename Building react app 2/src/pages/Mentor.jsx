import React, { useEffect, useState } from "react";
import { getAnonymizedEntries, addMentorNote } from "../utils/storage";

export default function Mentor({ user }) {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
  });
  const [entries, setEntries] = useState([]);
  const [noteText, setNoteText] = useState("Great job — keep it up!");

  function load() {
    setEntries(getAnonymizedEntries(month));
  }

  useEffect(() => { load(); }, [month]);

  async function addNote(entryId) {
    addMentorNote(entryId, user.id, noteText);
    alert("Note added locally");
    load();
  }

  return (
    <div>
      <div className="card" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h2>Mentor dashboard</h2>
          <div className="small">Viewing anonymized entries from students who opted in.</div>
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <input type="month" value={month} onChange={e=>setMonth(e.target.value)} />
        </div>
      </div>

      <div className="card">
        <label>Positive note to add (applies to selected entry)</label>
        <input value={noteText} onChange={e=>setNoteText(e.target.value)} />
      </div>

      <div className="card">
        {entries.length === 0 && <div className="small">No anonymized entries for this month.</div>}
        {entries.map(e => (
          <div key={e.id || e.date} style={{padding:8, borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div><b>{e.pseudonym}</b> • {e.date}</div>
              <div className="small">Study {e.studyHours}h • Sleep {e.sleep}h • Stress {e.stress} • Focus {e.focus}</div>
            </div>
            {e.reflection && <div style={{marginTop:6}} className="small">{e.reflection}</div>}
            <div style={{marginTop:8, display:"flex", gap:8}}>
              <button className="btn" onClick={()=>addNote(e.id)}>Add positive note</button>
            </div>
            {e.mentorNotes && e.mentorNotes.length > 0 && (
              <div style={{marginTop:8}} className="small">
                <b>Notes:</b>
                <ul>
                  {e.mentorNotes.map((n, i) => <li key={i}>{n.text} <span style={{color:"#7b8"}}>({new Date(n.createdAt).toLocaleString()})</span></li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
