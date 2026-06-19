import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import FilterButtons from "./FilterButtons";
import TaskItem from "./TaskItem";

function TaskList() {
  
  const { tasks, toggleComplete, deleteTask } = useTaskContext();
  const [filter, setFilter] = useState("all");


  const filteredTasks =
    filter === "active"
      ? tasks.filter((task) => !task.completed)
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks;

  return (
    <div>
      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleComplete} 
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;