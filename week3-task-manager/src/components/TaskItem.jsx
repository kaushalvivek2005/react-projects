function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          opacity: task.completed ? 0.5 : 1,
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;