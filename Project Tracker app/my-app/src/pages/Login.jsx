import React, { useState } from 'react'
// import { useAuth } from '../context/Auth'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state && location.state.from) || '/'

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div style={{maxWidth:420, margin:'24px auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        <div style={{marginTop:12}}>
          <button type="submit">Login</button>
          <Link to="/signup"><button style={{marginLeft:8}}>Signup</button></Link>
        </div>
      </form>
    </div>
  )
}

