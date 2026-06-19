import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) return;

    addTask(trimmedText);
    setText("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;