import React, { useState } from "react";
import { Task, TaskPriority } from "../types/Task";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Low);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };

    addTask(newTask);
    setDescription("");
    setPriority(TaskPriority.Low);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        placeholder="Enter task description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        <option value={TaskPriority.Low}>Low</option>
        <option value={TaskPriority.Medium}>Medium</option>
        <option value={TaskPriority.High}>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
