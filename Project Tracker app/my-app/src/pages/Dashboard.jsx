import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { fetchProjects, deleteProject } from '../app/projectsSlice'

export default function Dashboard() {
  const dispatch = useDispatch()
  const projects = useSelector(s => s.projects.items)

  useEffect(() => {
    dispatch(fetchProjects()) 
  }, [dispatch])

  async function handleDelete(id) {
    if (!confirm('Delete project?')) return
    dispatch(deleteProject(id))
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h2>Projects</h2>
        <div>
          <Link to="/projects/add"><button>Add Project</button></Link>
        </div>
      </div>

      <div className="project-grid">
        {projects.length === 0 ? <div>No projects yet</div> : projects.map(p => (
          <div key={p.id} style={{position:'relative'}}>
            <ProjectCard project={p} />
            <button style={{position:'absolute',right:8,top:8}} onClick={()=>handleDelete(p.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}
