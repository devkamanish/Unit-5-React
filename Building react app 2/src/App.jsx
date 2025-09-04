import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { getCurrentUser, clearCurrentUser, ensureSeed } from "./utils/storage";
import Dashboard from "./pages/Dashboard";
import Mentor from "./pages/Mentor";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  ensureSeed(); 
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    function onStorage() {
      setUser(getCurrentUser());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function handleLogout() {
    clearCurrentUser();
    setUser(null);
    navigate("/login");
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">MindTrack </div>
        <nav className="nav">
          <Link to="/">Journal</Link>
          <Link to="/mentor">Mentor</Link>
        </nav>
        <div className="right">
          {user ? (
            <>
              <span className="small">Hi {user.displayName} ({user.role})</span>
              <button onClick={handleLogout} className="btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn small">Login</Link>
              <Link to="/register" className="btn small">Register</Link>
            </>
          )}
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/mentor" element={user?.role === "mentor" ? <Mentor user={user} /> : <Navigate to="/" />} />
          <Route path="/login" element={<Login onLogin={(u) => setUser(u)} />} />
          <Route path="/register" element={<Register onRegister={(u) => setUser(u)} />} />
        </Routes>
      </main>
    </div>
  );
}
