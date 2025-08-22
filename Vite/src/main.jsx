import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import DataProvider from './context/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
  <App />
    </DataProvider>
  
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> bce3b0cf01e8689d9a9f415ba855ebbd4ad40919
  </StrictMode>,
)
