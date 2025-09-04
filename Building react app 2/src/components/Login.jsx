import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUserByEmail, setCurrentUserId } from "../utils/storage";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      setErr("Invalid credentials. (demo stores plain text passwords)");
      return;
    }
    setCurrentUserId(user.id);
    onLogin?.(user);
    nav("/");
  }

  return (
    <div className="card">
      <h2>Login (client-only)</h2>
      {err && <div className="note">{err}</div>}
      <form onSubmit={submit}>
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div style={{marginTop:10}}>
          <button className="btn">Login</button>
        </div>
      </form>
      <div className="footer-small">Demo passwords: "student" or "mentor" for seed users.</div>
    </div>
  );
}
