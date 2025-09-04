import React from "react";
import { parseMarkdown } from "../utils/miniMarkdown";

export default function ReflectionEditor({ value, onChange }) {
  return (
    <div>
      <label>Reflection (markdown supported)</label>
      <textarea rows={5} value={value || ""} onChange={e => onChange(e.target.value)} />
      <div style={{marginTop:8}}>
        <label>Preview</label>
        <div className="card" dangerouslySetInnerHTML={{ __html: parseMarkdown(value) }} />
      </div>
    </div>
  );
}
