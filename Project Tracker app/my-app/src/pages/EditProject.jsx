import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateProject } from '../app/projectsSlice'

export default function EditProject() {
  const { projectId } = useParams()
  const project = useSelector(s => s.projects.items.find(p=>p.id===projectId)) || {}
  const [title, setTitle] = useState(project.title || '')
  const [description, setDescription] = useState(project.description || '')
  const dispatch = useDispatch()
  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(updateProject({ id: projectId, changes: { title, description } }))
    nav('/')
  }

  return (
    <div style={{maxWidth:640}}>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} />
        <label>Description</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={4} />
        <div style={{marginTop:12}}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
