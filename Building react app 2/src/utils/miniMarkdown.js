

export function parseMarkdown(md = "") {
  if (!md) return "";
  let s = md.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const lines = s.split("\n");
  const out = [];
  let inList = false;
  for (let line of lines) {
    if (line.trim().startsWith("- ")) {
      if (!inList) { out.push("<ul>"); inList = true; }
      out.push("<li>" + line.trim().slice(2) + "</li>");
    } else {
      if (inList) { out.push("</ul>"); inList = false; }
      if (line.trim() === "") out.push("<p></p>");
      else out.push("<p>" + line + "</p>");
    }
  }
  if (inList) out.push("</ul>");
  return out.join("");
}
