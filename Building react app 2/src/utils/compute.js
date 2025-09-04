// streak calculation + simple insights
export function computeStreak(entries) {
  if (!entries || entries.length === 0) return 0;
  const dates = new Set(entries.map(e => e.date));
  const today = new Date();
  const pad = (d) => ("" + d.getFullYear()) + "-" + String(d.getMonth()+1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  let cur = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let streak = 0;
  while (dates.has(pad(cur))) {
    streak++;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

function avg(arr) {
  if (!arr.length) return 0;
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

export function basicInsights(entries) {
  if (!entries || entries.length < 7) return [];
  const sleeps = entries.map(e => Number(e.sleep) || 0);
  const focus = entries.map(e => Number(e.focus) || 0);
  const breaks = entries.map(e => Number(e.breakTime) || 0);
  const stress = entries.map(e => Number(e.stress) || 0);
  const insights = [];
  if (avg(sleeps) >= 8 && avg(focus) >= 6) insights.push("You tend to focus better after 8+ hours of sleep.");
  if (avg(breaks) >= 30 && avg(stress) <= 5) insights.push("Longer breaks seem to reduce stress.");
  if (avg(sleeps) < 6 && avg(stress) > 6) insights.push("Low sleep appears correlated with higher stress.");
  return insights;
}
