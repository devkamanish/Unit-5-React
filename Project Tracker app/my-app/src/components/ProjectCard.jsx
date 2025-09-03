import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const tasks = project.tasks ? Object.values(project.tasks) : []
  const done = tasks.filter(t => t.completed).length
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p className="small">{project.description}</p>
      <p className="small">Created: {new Date(project.createdAt).toLocaleString()}</p>
      <p className="small">{done} / {tasks.length} tasks complete</p>
      <div style={{marginTop:8,display:'flex',gap:8}}>
        <Link to={`/projects/${project.id}`}><button>Open</button></Link>
        <Link to={`/projects/${project.id}/edit`}><button>Edit</button></Link>
      </div>
    </div>
  )
}
