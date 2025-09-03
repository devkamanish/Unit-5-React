import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, updateTask, deleteTask } from '../app/projectsSlice'
import TaskItem from '../components/TaskItem'
import debounce from '../utils/debounce'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const project = useSelector(s => s.projects.items.find(p=>p.id===projectId)) || {}
  const tasksObj = project.tasks || {}
  const tasksArray = Object.entries(tasksObj).map(([id, t]) => ({ id, ...t }))

  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('normal')
  const [filter, setFilter] = useState('all') // all/completed/incomplete
  const [sortBy, setSortBy] = useState('createdAt') // createdAt/priority
  const [page, setPage] = useState(1)
  const pageSize = 5
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const dispatch = useDispatch()

  useEffect(()=>{setPage(1)}, [filter, sortBy, debouncedSearch])

  const doDebounce = useMemo(()=>debounce(v => setDebouncedSearch(v), 500), [])
  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
    doDebounce(e.target.value)
  }

  const filtered = tasksArray.filter(t => {
    if (filter === 'completed') return t.completed
    if (filter === 'incomplete') return !t.completed
    return true
  }).filter(t => t.title.toLowerCase().includes(debouncedSearch.toLowerCase()))

  const sorted = filtered.sort((a,b) => {
    if (sortBy === 'createdAt') return (b.createdAt || 0) - (a.createdAt || 0)
    if (sortBy === 'priority') {
      const order = { high: 3, normal: 2, low: 1 }
      return (order[b.priority] || 2) - (order[a.priority] || 2)
    }
    return 0
  })

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const visible = sorted.slice((page-1)*pageSize, page*pageSize)

  async function handleAddTask(e) {
    e.preventDefault()
    if (!title.trim()) return
    const taskPayload = { title, priority, completed: false, createdAt: Date.now() }
    await dispatch(addTask({ projectId, task: taskPayload }))
    setTitle('')
    setPriority('normal')
  }

  async function toggle(taskId, completed) {
    await dispatch(updateTask({ projectId, taskId, changes: { completed } }))
  }

  async function editTask(taskId) {
    const t = tasksObj[taskId]
    const newTitle = prompt('Task title', t.title)
    if (newTitle === null) return
    const newPriority = prompt('Priority (low/normal/high)', t.priority || 'normal') || t.priority
    await dispatch(updateTask({ projectId, taskId, changes: { title: newTitle, priority: newPriority } }))
  }

  async function removeTask(taskId) {
    if (!confirm('Delete task?')) return
    await dispatch(deleteTask({ projectId, taskId }))
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p className="small">{project.description}</p>

      <div style={{marginTop:16}}>
        <form onSubmit={handleAddTask} style={{display:'grid', gap:8, maxWidth:600}}>
          <div style={{display:'flex',gap:8}}>
            <input placeholder="Task title" value={title} onChange={e=>setTitle(e.target.value)} />
            <select value={priority} onChange={e=>setPriority(e.target.value)} style={{width:140}}>
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </select>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>

      <div style={{marginTop:16, display:'flex', gap:8, alignItems:'center'}}>
        <label>Filter</label>
        <select value={filter} onChange={e=>setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <label>Sort</label>
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="createdAt">Newest</option>
          <option value="priority">Priority</option>
        </select>

        <input placeholder="Search tasks" value={searchTerm} onChange={handleSearchChange} style={{marginLeft:12}} />
      </div>

      <div style={{marginTop:12}}>
        {visible.length === 0 ? <div className="small">No tasks</div> : visible.map(t => (
          <TaskItem
            key={t.id}
            taskId={t.id}
            task={t}
            onToggle={(id, completed) => toggle(id, completed)}
            onEdit={(id) => editTask(id)}
            onDelete={(id) => removeTask(id)}
          />
        ))}
      </div>

      <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page<=1}>Prev</button>
        <div>Page {page} / {totalPages}</div>
        <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page>=totalPages}>Next</button>
      </div>
    </div>
  )
}
