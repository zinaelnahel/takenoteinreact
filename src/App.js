import React, { useState } from "react";
import "./styles.css";

import TaskList from "./TaskList";

export default function App() {
  const [pendingTasks, setPending] = useState([]);

  const [completedTasks, setCompleted] = useState([]);
  function toggleComplete(task) {
    console.log(task);

    if (task.finished === false) {
      task.finished = true;
      setCompleted([...completedTasks, task]);
      const toggledPendingTask = pendingTasks.filter(
        (iter) => iter.name !== task.name
      );
      setPending(toggledPendingTask);
    } else {
      task.finished = false;
      setPending([...pendingTasks, task]);
      const toggledCompletedTask = completedTasks.filter(
        (iter) => iter.name !== task.name
      );
      setCompleted(toggledCompletedTask);
    }
   
  }
  function handleDelete(event) {
    const filteredPendingTasks = pendingTasks.filter(
      (task) => task.id !== event.target.id
    );
    setPending([...filteredPendingTasks]);
    const filteredCompletedTasks = completedTasks.filter(
      (task) => task.id != event.target.id
    );
    setCompleted([...filteredCompletedTasks]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 999),
      finished: false,
      name: event.target.newTask.value
    };
    setPending([...pendingTasks, newTask]);
    event.target.reset();
  };
  return (
    <div className="App">
      <div className="block">
        <form onSubmit={handleSubmit}>
          <input
            id=""
            finished=""
            name="newTask"
            placeholder="Add Task Here..."
          />
          <button>Add</button>
        </form>
      </div>
      <div className="block">
        <div>
          <TaskList
            pendingTasks={pendingTasks}
            completedTasks={completedTasks}
            handleDelete={handleDelete}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
}
