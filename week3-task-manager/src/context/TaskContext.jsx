import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  // Make sure useTasks se toggleComplete aur deleteTask dono nikal rahe ho!
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();
    
  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}