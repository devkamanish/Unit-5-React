import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api/axios'


const mapFirebaseObjToArray = (obj = {}) => {
  return Object.entries(obj).map(([id, value]) => ({ id, ...value }))
}

export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
  const res = await api.get('/projects.json')
  const data = res.data || {}
  return mapFirebaseObjToArray(data)
})

export const addProject = createAsyncThunk('projects/add', async (payload) => {
  const res = await api.post('/projects.json', payload)
  return { id: res.data.name, ...payload }
})

export const updateProject = createAsyncThunk('projects/update', async ({ id, changes }) => {
  await api.patch(`/projects/${id}.json`, changes)
  return { id, changes }
})

export const deleteProject = createAsyncThunk('projects/delete', async (id) => {
  await api.delete(`/projects/${id}.json`)
  return id
})

export const addTask = createAsyncThunk('tasks/add', async ({ projectId, task }) => {
  const res = await api.post(`/projects/${projectId}/tasks.json`, task)
  return { projectId, taskId: res.data.name, task }
})

export const updateTask = createAsyncThunk('tasks/update', async ({ projectId, taskId, changes }) => {
  await api.patch(`/projects/${projectId}/tasks/${taskId}.json`, changes)
  return { projectId, taskId, changes }
})

export const deleteTask = createAsyncThunk('tasks/delete', async ({ projectId, taskId }) => {
  await api.delete(`/projects/${projectId}/tasks/${taskId}.json`)
  return { projectId, taskId }
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    setProjects(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (s) => { s.loading = true })
      .addCase(fetchProjects.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchProjects.rejected, (s, a) => { s.loading = false; s.error = a.error.message })

      .addCase(addProject.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateProject.fulfilled, (s, a) => {
        const idx = s.items.findIndex(p => p.id === a.payload.id)
        if (idx >= 0) s.items[idx] = { ...s.items[idx], ...a.payload.changes }
      })
      .addCase(deleteProject.fulfilled, (s, a) => {
        s.items = s.items.filter(p => p.id !== a.payload)
      })

      .addCase(addTask.fulfilled, (s, a) => {
        const p = s.items.find(p => p.id === a.payload.projectId)
        if (!p) return
        p.tasks = p.tasks || {}
        p.tasks[a.payload.taskId] = a.payload.task
      })
      .addCase(updateTask.fulfilled, (s, a) => {
        const p = s.items.find(p => p.id === a.payload.projectId)
        if (!p || !p.tasks) return
        p.tasks[a.payload.taskId] = { ...p.tasks[a.payload.taskId], ...a.payload.changes }
      })
      .addCase(deleteTask.fulfilled, (s, a) => {
        const p = s.items.find(p => p.id === a.payload.projectId)
        if (!p || !p.tasks) return
        delete p.tasks[a.payload.taskId]
      })
  }
})

export const { setProjects } = projectsSlice.actions
export default projectsSlice.reducer
