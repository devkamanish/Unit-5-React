import React from "react";

function buildHtmlForPrint(month, entries, userDisplay) {
  const rows = entries.map(e => `<tr><td>${e.date}</td><td>${e.studyHours}h</td><td>${e.breakTime}m</td><td>${e.sleep}h</td><td>${e.stress}</td><td>${e.focus}</td></tr>`).join("");
  return `
    <html><head><title>MindTrack - ${month}</title>
    <style>
      body{font-family:sans-serif;padding:20px;color:#0b1220}
      table{width:100%;border-collapse:collapse}
      th,td{padding:8px;border:1px solid #ddd;text-align:left}
      h1{margin-bottom:8px}
    </style>
    </head>
    <body>
      <h1>MindTrack - ${month}</h1>
      <div><strong>User:</strong> ${userDisplay}</div>
      <table>
        <thead><tr><th>Date</th><th>Study</th><th>Break</th><th>Sleep</th><th>Stress</th><th>Focus</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </body></html>
  `;
}

export default function ExportButton({ month, entries = [], userDisplay }) {
  function exportPdf() {
    const html = buildHtmlForPrint(month, entries, userDisplay);
    const w = window.open("", "_blank");
    if (!w) return alert("Popup blocked - allow popups to export");
    w.document.write(html);
    w.document.close();
    setTimeout(() => {
      w.print();
    }, 300);
  }

  return <button className="btn" onClick={exportPdf}>Export month (print)</button>;
}
