import React, { useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddProject from './pages/AddProject'
import EditProject from './pages/EditProject'
import ProjectDetails from './pages/ProjectDetails'
import PrivateRoute from './components/PrivateRoute'
// import { useAuth } from './context/Auth'
import { db } from './utils/firebase'
import { ref, onValue } from 'firebase/database'
import { useDispatch } from 'react-redux'
import { setProjects } from './app/projectsSlice'


export default function App() {
  const { user, logout } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const projectsRef = ref(db, 'projects')
    const unsub = onValue(projectsRef, (snap) => {
      const data = snap.val() || {}
      const arr = Object.entries(data).map(([id, val]) => ({ id, ...val }))
      dispatch(setProjects(arr))
    })
    return () => unsub()
  }, [dispatch])

  return (
    <div className="container">
      <nav>
        <div>
          <Link to="/"><strong>Project Tracker</strong></Link>
        </div>
        <div>
          {user ? (
            <>
              <span style={{marginRight:12}}>Hi, {user.email}</span>
              <button onClick={() => { logout(); navigate('/login') }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login"><button style={{marginRight:8}}>Login</button></Link>
              <Link to="/signup"><button>Signup</button></Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/projects/add" element={<PrivateRoute><AddProject /></PrivateRoute>} />
        <Route path="/projects/:projectId/edit" element={<PrivateRoute><EditProject /></PrivateRoute>} />
        <Route path="/projects/:projectId" element={<PrivateRoute><ProjectDetails /></PrivateRoute>} />
      </Routes>
    </div>
  )
}
