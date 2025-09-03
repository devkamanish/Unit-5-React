import React, { useState } from 'react'
// import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signup(email, password)
      navigate('/')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div style={{maxWidth:420, margin:'24px auto'}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        <div style={{marginTop:12}}>
          <button type="submit">Create account</button>
        </div>
      </form>
    </div>
  )
}
