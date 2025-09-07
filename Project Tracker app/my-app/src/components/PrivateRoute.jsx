import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// import { useAuth } from '../context/Auth'

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <div style={{padding:20}}>Loading...</div>
  return user ? children : <Navigate to="/login" state={{ from: location }} replace />
}



