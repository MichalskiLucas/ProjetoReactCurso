import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './ToDoList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)
