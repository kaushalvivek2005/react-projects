# WEEK 3 PROJECT REPORT: TASK MANAGER APPLICATION
### State Management and Custom React Hooks Implementation

**Internship:** YuvaIntern – Junior ReactJS Developer
**Submitted By:** Kaushal Kumar
**Registration No.:** 24030485005
**Institution:** BIT Sindri, Jharkhand
**Department:** B.Tech Information Technology (2nd Year)
**Date:** June 20, 2026
**Repository:** https://github.com/kaushalvivek2005/react-project/tree/main/week3-task-manager

---

## 1. Executive Summary
This report documents the development of a Task Manager application designed to demonstrate advanced state management patterns and custom React hook implementation. The application successfully implements `useState`, `useEffect`, and a custom `useTasks` hook while leveraging the Context API for cross-component state sharing. The Task Manager allows users to create, complete, filter, and delete tasks with real-time state synchronization across multiple components.

## 2. Project Architecture & Component Hierarchy
To avoid complex data plumbing, the interface layers are kept highly isolated, and the shared state is delivered seamlessly down the tree.

* **App.jsx (Root Component)**
    * **TaskProvider (Context Setup Layer)**
        * `AddTask.jsx` *(Handles user inputs and form submissions)*
        * `FilterButtons.jsx` *(Renders filter controller UI)*
        * **TaskList.jsx (Task List Container)**
            * `TaskItem.jsx` *(Dynamic mapped rows for individual tasks)*

## 3. State Management Strategy & Data Flow
The system enforces a clean, unidirectional data flow pattern to protect state immutability:
1. **User Action:** The user adds a task or toggles/deletes an existing one.
2. **Hook Execution:** The components invoke specific business operations exposed by the global context.
3. **State Updates:** State adjusts immutability inside the singular custom hook instance (`useTasks.jsx`).
4. **Context Broadcast:** The `TaskContext.Provider` senses modifications and pushes updates down.
5. **UI Sync:** Re-renders trigger dynamically, ensuring real-time dashboard data precision.

---

## 4. Custom Hook Implementation (`useTasks.jsx`)
The complete system operational logic is centralized within the `useTasks.jsx` hook file, keeping presentational layers thin and maintainable.

```javascript
import { useState, useEffect } from "react";

export default function useTasks() {
  // Hydrate state from localStorage or initialize empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Synchronize state side-effects with local storage updates
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task Logic
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle Complete Logic
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task Logic
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleComplete, deleteTask };
}