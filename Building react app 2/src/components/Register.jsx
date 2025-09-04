import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUserByEmail, addUser, setCurrentUserId } from "../utils/storage";

export default function Register({ onRegister }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [optIn, setOptIn] = useState(true);
  const [err, setErr] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (!displayName || !email || !password) { setErr("Please fill all fields"); return; }
    if (findUserByEmail(email)) { setErr("Email already used"); return; }
    const user = addUser({ displayName, email, password, role, optIn });
    setCurrentUserId(user.id);
    onRegister?.(user);
    nav("/");
  }

  return (
    <div className="card">
      <h2>Create account (client-only)</h2>
      {err && <div className="note">{err}</div>}
      <form onSubmit={submit}>
        <label>Name</label>
        <input value={displayName} onChange={e=>setDisplayName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <label>Role</label>
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>
        <div style={{marginTop:8}}>
          <label><input type="checkbox" checked={optIn} onChange={e=>setOptIn(e.target.checked)} /> Opt-in to anonymized mentor view (students)</label>
        </div>
        <div style={{marginTop:10}}>
          <button className="btn">Register</button>
        </div>
      </form>
    </div>
  );
}
