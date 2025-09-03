import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../app/projectsSlice'
import { useNavigate } from 'react-router-dom'

export default function AddProject() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    const payload = { title, description, createdAt: Date.now() }
    await dispatch(addProject(payload))
    nav('/')
  }

  return (
    <div style={{maxWidth:640}}>
      <h2>Add Project</h2>
      <form onSubmit={submit}>
        <label>Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} required />
        <label>Description</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={4} />
        <div style={{marginTop:12}}>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}
