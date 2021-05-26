import React, { useState } from "react";
import "./styles.css";

import TaskList from "./TaskList";

export default function App() {
  const [taskEditInput, setTaskEditInput] = useState("");
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
  // handleChange(event) {
  //   const {name, value} = event.target
  //   setState({
  //       [name]: value
  //   })

  function handleDelete(id) {
    // console.log(Number(event.target.id));
    // console.log(parseInt(event.target.id, 10));
    // console.log(+event.target.id);
    console.log(id);

    const filteredPendingTasks = pendingTasks.filter((task) => task.id !== id);
    setPending([...filteredPendingTasks]);
    const filteredCompletedTasks = completedTasks.filter(
      (task) => task.id !== id
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

  function editTask(event) {
    setTaskEditInput(event.target.value);
  }

  const saveEdit = (task) => {
    console.log("saving");
    task.name = taskEditInput;

    console.log({ completedTasks, pendingTasks, task });

    if (!task.finished) {
      setPending([...pendingTasks.filter((t) => t.id !== task.id), task]);
    } else {
      setCompleted([...completedTasks.filter((t) => t.id !== task.id), task]);
    }
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
            editTask={editTask}
            saveEdit={saveEdit}
          />
        </div>
      </div>
    </div>
  );
}
