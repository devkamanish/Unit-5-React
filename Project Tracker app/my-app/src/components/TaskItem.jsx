import React from 'react'

export default function TaskItem({ taskId, task, onToggle, onEdit, onDelete }) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:8,borderBottom:'1px solid #eee'}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <input type="checkbox" checked={task.completed || false} onChange={() => onToggle(taskId, !task.completed)} />
        <div>
          <div style={{fontWeight:600}}>{task.title}</div>
          <div className="small">Priority: {task.priority || 'normal'} · {task.dueDate ? `Due: ${task.dueDate}` : ''}</div>
        </div>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button onClick={() => onEdit(taskId)}>Edit</button>
        <button onClick={() => onDelete(taskId)}>Delete</button>
      </div>
    </div>
  )
}
