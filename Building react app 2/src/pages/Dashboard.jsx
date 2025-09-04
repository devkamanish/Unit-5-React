import React, { useEffect, useState } from "react";
import HabitForm from "../components/HabitForm";
import EntriesTable from "../components/EntriesTable";
import InsightsPanel from "../components/InsightsPanel";
import ExportButton from "../components/ExportButton";
import { getEntriesByUser } from "../utils/storage";
import { computeStreak, basicInsights } from "../utils/compute";

import { useSearchParams } from "react-router-dom";

export default function Dashboard({ user }) {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
  });
  const [entries, setEntries] = useState([]);

  function load() {
    setEntries(getEntriesByUser(user.id, month));
  }

  useEffect(() => { load(); }, [month]);

  const streak = computeStreak(getEntriesByUser(user.id));
  const insights = basicInsights(getEntriesByUser(user.id));

  return (
    <>
      <div className="card row" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h2>My Journal</h2>
          <div className="small">Track study and wellness daily.</div>
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <input type="month" value={month} onChange={e=>setMonth(e.target.value)} />
          <ExportButton month={month} entries={entries} userDisplay={user.displayName} />
        </div>
      </div>

      <div className="grid">
        <div className="col-12"><HabitForm user={user} onSaved={load} /></div>
        <div className="col-6"><InsightsPanel streak={streak} insights={insights} has7Days={getEntriesByUser(user.id).length >= 7} /></div>
        <div className="col-6"><EntriesTable entries={entries} /></div>
      </div>
    </>
  );
}
