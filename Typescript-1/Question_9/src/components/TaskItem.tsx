import React from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.description} ({task.priority})
      </span>
    </li>
  );
};

export default TaskItem;
