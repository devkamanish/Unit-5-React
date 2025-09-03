import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import api, { setAuthToken } from '../api/axios'

const AuthContext = createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const token = await u.getIdToken()
        setUser(u)
        setAuthToken(token)
        localStorage.setItem('pt_token', token)
      } else {
        setUser(null)
        setAuthToken(null)
        localStorage.removeItem('pt_token')
      }
      setLoading(false)
    })

    const token = localStorage.getItem('pt_token')
    if (token) setAuthToken(token)
    return () => unsub()
  }, [])



  async function signup(email, password) {
    setLoading(true)
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const token = await res.user.getIdToken()

    setAuthToken(token)
    setUser(res.user)
    setLoading(false)
    return res.user
  }

  async function login(email, password) {
    setLoading(true)
    const res = await signInWithEmailAndPassword(auth, email, password)
    const token = await res.user.getIdToken()
    setAuthToken(token)
    setUser(res.user)
    setLoading(false)
    return res.user
  }


  async function logout() {
    await signOut(auth)
    setUser(null)
    setAuthToken(null)
    localStorage.removeItem('pt_token')
  }

  const value = { user, loading, signup, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


