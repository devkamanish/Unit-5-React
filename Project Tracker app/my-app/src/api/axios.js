import axios from 'axios'

const BASE = import.meta.env.VITE_FIREBASE_DATABASE_URL.replace(/\/$/, '')

const api = axios.create({
  baseURL: BASE
})


export function setAuthToken(idToken) {

    api.defaults.params = api.defaults.params || {}
  if (idToken) api.defaults.params.auth = idToken
  else delete api.defaults.params.auth
}

export default api
