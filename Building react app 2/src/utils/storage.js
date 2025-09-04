// client-side storage utilities (no backend)
const USERS_KEY = "mindtrack_users_v1";
const ENTRIES_KEY = "mindtrack_entries_v1";
const CURRENT_KEY = "mindtrack_current_v1";

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
export function saveUsers(u) {
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
}
export function getEntries() {
  return JSON.parse(localStorage.getItem(ENTRIES_KEY) || "[]");
}
export function saveEntries(e) {
  localStorage.setItem(ENTRIES_KEY, JSON.stringify(e));
}
export function setCurrentUserId(id) {
  localStorage.setItem(CURRENT_KEY, id);
  window.dispatchEvent(new Event("storage"));
}
export function getCurrentUserId() {
  return localStorage.getItem(CURRENT_KEY);
}
export function clearCurrentUser() {
  localStorage.removeItem(CURRENT_KEY);
  window.dispatchEvent(new Event("storage"));
}
export function getCurrentUser() {
  const id = getCurrentUserId();
  if (!id) return null;
  return getUsers().find(u => u.id === id) || null;
}

export function findUserByEmail(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}
export function addUser({ displayName, email, password, role = "student", optIn = true }) {
  const users = getUsers();
  const id = uid();
  const user = { id, displayName, email, password, role, optInAnonymized: !!optIn };
  users.push(user);
  saveUsers(users);
  return user;
}
export function updateUser(user) {
  const users = getUsers().map(u => (u.id === user.id ? user : u));
  saveUsers(users);
}

export function addOrUpdateEntry(entry) {
  const entries = getEntries();
  const idx = entries.findIndex(e => e.userId === entry.userId && e.date === entry.date);
  if (idx >= 0) {
    entries[idx] = { ...entries[idx], ...entry };
  } else {
    entries.push({ ...entry, id: uid(), mentorNotes: entry.mentorNotes || [] });
  }
  saveEntries(entries);
  return entries.find(e => e.userId === entry.userId && e.date === entry.date);
}
export function getEntriesByUser(userId, monthPrefix) {
  let list = getEntries().filter(e => e.userId === userId);
  if (monthPrefix) {
    list = list.filter(e => e.date.startsWith(monthPrefix));
  }
  return list.sort((a,b) => a.date.localeCompare(b.date));
}
export function getAnonymizedEntries(monthPrefix) {
  const users = getUsers().filter(u => u.role === "student" && u.optInAnonymized);
  const ids = new Set(users.map(u => u.id));
  let list = getEntries().filter(e => ids.has(e.userId));
  if (monthPrefix) list = list.filter(e => e.date.startsWith(monthPrefix));
  const userMap = {};
  users.forEach((u, idx) => {
    userMap[u.id] = `Student ${String.fromCharCode(65 + (idx % 26))}`;
  });
  return list.map(e => ({ ...e, pseudonym: userMap[e.userId] || "Student" }));
}
export function addMentorNote(entryId, mentorId, text) {
  const entries = getEntries();
  const idx = entries.findIndex(e => e.id === entryId);
  if (idx < 0) return null;
  const note = { mentorId, text, createdAt: new Date().toISOString() };
  entries[idx].mentorNotes = entries[idx].mentorNotes || [];
  entries[idx].mentorNotes.push(note);
  saveEntries(entries);
  return entries[idx];
}

export function ensureSeed() {
  if (getUsers().length) return;
  const mentor = { id: "m1", displayName: "Mentor Alice", email: "mentor@example.com", password: "mentor", role: "mentor", optInAnonymized: false };
  const student = { id: "s1", displayName: "Student Bob", email: "student@example.com", password: "student", role: "student", optInAnonymized: true };
  saveUsers([mentor, student]);
  const today = new Date();
  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  const days = [];
  for (let i = 0; i < 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`);
  }
  const entries = days.map((date, idx) => ({
    id: "e" + idx,
    userId: "s1",
    date,
    studyHours: Math.round(Math.random()*4 + 2),
    breakTime: Math.round(Math.random()*60),
    sleep: Math.round(Math.random()*3 + 6),
    stress: Math.round(Math.random()*6 + 1),
    focus: Math.round(Math.random()*6 + 3),
    reflection: idx % 2 === 0 ? "Worked on chapters. Felt productive." : "Took a longer break and felt refreshed.",
    mentorNotes: []
  }));
  saveEntries(entries);
}
