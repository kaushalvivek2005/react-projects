import { useState } from 'react'
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import './App.css'

function App() { 
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList/>
      </div>
    </TaskProvider>
  )
}

export default App
